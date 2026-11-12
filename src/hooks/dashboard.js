import {
  SetExperience,
  SetPortfolioInfo,
  SetProjects,
  SetSkills,
  sessionId,
  userInfo,
} from "../stores";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const INFO_ID = "6a9f92fef914115607467d78";

/*
  Admin requests are authorised by the operator's email (validated against the
  ROOT_KEY on the backend) plus the active session id.
*/
export const adminHeaders = () => ({
  "content-type": "application/json",
  authorization: userInfo()?.email || "",
  sessionid: sessionId() || "",
});

const request = async (path, { method = "GET", body } = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: adminHeaders(),
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await res.text();
  const payload = text ? JSON.parse(text) : {};

  if (!res.ok) {
    throw new Error(payload.error || payload.message || `Request failed (${res.status})`);
  }

  return payload;
};

/* ---------------------------------------------------------------- reading */

export const refreshInfo = async () => {
  const data = await request(`/portfolio/info/${INFO_ID}`);
  SetPortfolioInfo(data.result || {});
  return data.result || {};
};

export const refreshSkills = async () => {
  const data = await request("/portfolio/skills");
  SetSkills(data.result || {});
  return data.result || {};
};

export const refreshExperience = async () => {
  const data = await request("/portfolio/experience");
  SetExperience(Array.isArray(data) ? data : []);
  return Array.isArray(data) ? data : [];
};

export const refreshProjects = async () => {
  const data = await request("/projects");
  SetProjects(Array.isArray(data) ? data : []);
  return Array.isArray(data) ? data : [];
};

export const loadDashboard = () =>
  Promise.all([refreshInfo(), refreshSkills(), refreshExperience(), refreshProjects()]);

/* --------------------------------------------------------------- profile */

export const saveProfile = async (patch) => {
  const data = await request(`/portfolio/info/${INFO_ID}`, {
    method: "PUT",
    body: patch,
  });
  SetPortfolioInfo((prev) => ({ ...prev, ...(data.result || {}) }));
  return data.result;
};

/* ---------------------------------------------------------------- skills */

export const createCategory = (catagory) =>
  request("/portfolio/skillcatagories", { method: "POST", body: { catagory } });

export const renameCategory = (catagory, target_catagory) =>
  request("/portfolio/skillcatagories", {
    method: "PUT",
    body: { catagory, target_catagory },
  });

export const removeCategory = (catagory) =>
  request("/portfolio/skillcatagories", { method: "DELETE", body: { catagory } });

export const createSkill = (payload) =>
  request("/portfolio/skill", { method: "POST", body: payload });

export const updateSkill = (payload) =>
  request("/portfolio/skill", { method: "PUT", body: payload });

export const removeSkill = (payload) =>
  request("/portfolio/skill", { method: "DELETE", body: payload });

/* ------------------------------------------------------------ experience */

export const createExperience = (payload) =>
  request("/portfolio/experience", { method: "POST", body: payload });

export const updateExperience = (payload) =>
  request("/portfolio/experience", { method: "PUT", body: payload });

export const removeExperience = (id) =>
  request("/portfolio/experience", { method: "DELETE", body: { id } });

/* -------------------------------------------------------------- projects */

export const createProject = (payload) =>
  request("/projects", { method: "POST", body: payload });

export const updateProject = (id, payload) =>
  request(`/projects/${id}`, { method: "PUT", body: payload });

export const removeProject = (id) =>
  request(`/projects/${id}`, { method: "DELETE" });

/* -------------------------------------------------------------- imagekit */

/*
  Uploads straight from the browser to ImageKit using a short-lived signature
  issued by the backend. Only the resulting URL + fileId go into MongoDB.
*/
export const uploadImage = async (file, folder = "portfolio") => {
  if (!file) throw new Error("No file selected");

  const auth = await request("/imagekit/auth");
  const params = auth.result || auth;

  const body = new FormData();
  body.append("file", file);
  body.append("fileName", file.name);
  body.append("folder", folder);
  body.append("publicKey", import.meta.env.IK_PUBKEY || params.publicKey);
  body.append("token", params.token);
  body.append("expire", params.expire);
  body.append("signature", params.signature);

  const res = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
    method: "POST",
    body,
  });
  const payload = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(payload.message || "Image upload failed");
  }

  return {
    url: payload.url,
    fileId: payload.fileId,
    thumbnailUrl: payload.thumbnailUrl,
  };
};

export const deleteImage = (fileId) =>
  request("/imagekit/file", { method: "DELETE", body: { fileId } });
