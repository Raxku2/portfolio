import {
  clearAuthSession,
  hydrateAuthSession,
  saveAuthSession,
  sessionId,
} from "../stores";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

/*
  Requests fired for the same session (login page + startup bootstrap) are
  de-duplicated so the backend only sees one validation per page load.
*/
const inflightValidations = new Map();

const isObject = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const firstString = (...values) =>
  values.find((value) => typeof value === "string" && value.length > 0) ?? null;

/*
  The backend wraps payloads as `{ result: ... }` (see hooks/info.js), but the
  auth endpoint may also answer with the user object directly. Normalise both.
*/
export const extractUser = (payload) => {
  if (!isObject(payload)) return null;

  const candidates = [
    payload.result?.user,
    payload.data?.user,
    payload.user,
    payload.result,
    payload.data,
    payload,
  ];

  return (
    candidates.find(
      (candidate) =>
        isObject(candidate) &&
        (candidate.email ||
          candidate.name ||
          candidate.username ||
          candidate._id ||
          candidate.id),
    ) ?? null
  );
};

const extractSessionId = (payload, fallback) =>
  firstString(
    payload?.sessionId,
    payload?.sessionid,
    payload?.result?.sessionId,
    payload?.result?.sessionid,
    payload?.data?.sessionId,
    payload?.data?.sessionid,
    fallback,
  );

/*
  Validates a session id against the backend, then persists the user in every
  store + localStorage. Returns the user object, or null when the session is
  rejected / unreachable.
*/
export const sessionValidator = async (id) => {
  const validatedId = firstString(id);
  if (!validatedId) return null;

  const pending = inflightValidations.get(validatedId);
  if (pending) return pending;

  const request = (async () => {
    try {
      const res = await fetch(BASE_URL + "/auth/session", {
        method: "GET",
        headers: {
          sessionid: validatedId,
        },
      });

      if (!res.ok) {
        console.warn("[AUTH] session rejected (CODE: " + res.status + ")");
        clearAuthSession();
        return null;
      }

      const result = await res.json();
      const user = extractUser(result) ?? {};

      return saveAuthSession({
        sessionId: extractSessionId(result, validatedId),
        user,
      });
    } catch (error) {
      // Network / CORS failure: keep the locally stored session, it may still
      // be valid. Only an explicit backend rejection signs the user out.
      console.error("[AUTH] session validation failed", error);
      return null;
    } finally {
      inflightValidations.delete(validatedId);
    }
  })();

  inflightValidations.set(validatedId, request);
  return request;
};

/*
  OAuth landing: the backend appends ?session=<id> to the redirect URL. This
  works on any route, not just /login, so a deep link still signs the user in.
*/
export const captureSessionFromUrl = async () => {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const urlSessionId = firstString(params.get("session"));

  if (!urlSessionId) return null;

  return sessionValidator(urlSessionId);
};

/*
  Page load: localStorage -> stores immediately, then revalidate in the
  background so a revoked/expired session signs the user out without blocking
  the first render.
*/
export const restoreAuthSession = ({ revalidate = true } = {}) => {
  const stored = hydrateAuthSession();

  if (stored && revalidate) {
    sessionValidator(stored.sessionId);
  }

  return stored;
};

/*
  Clears the local session first (instant UI feedback), then tells the backend
  to destroy it. Navigation is left to the caller.
*/
export const logout = async () => {
  const currentSessionId = sessionId();
  clearAuthSession();

  if (!currentSessionId) return;

  try {
    await fetch(BASE_URL + "/auth/logout", {
      method: "POST",
      headers: {
        sessionid: currentSessionId,
      },
    });
  } catch (error) {
    console.warn("[AUTH] remote logout failed, local session cleared", error);
  }
};

/*
  Header helper for authenticated calls: fetch(url, { headers: authHeaders() }).
*/
export const authHeaders = (extra = {}) => {
  const currentSessionId = sessionId();
  return currentSessionId ? { ...extra, sessionid: currentSessionId } : { ...extra };
};
