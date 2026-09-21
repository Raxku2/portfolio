import { useNavigate } from "@solidjs/router";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const sessionValidator = async (sessionId) => {
  const navigate = useNavigate();

  const res = await fetch(BASE_URL + "auth/session", {
    method: "GET",
    headers: {
      sessionid: sessionId,
    },
  });
  if (!res.status === 200) {
    console.error(res.status);
    navigate("/home", { replace: true });
    return;
  }
  const result = await res.json();
  console.log(result);
    navigate("/home", { replace: true });

  console.log("sesson validator running...", sessionId);
};
