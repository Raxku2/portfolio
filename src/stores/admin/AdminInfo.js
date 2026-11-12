import { createSignal } from "solid-js";
import { setFormdata } from "../user/contactsForm";

export const AUTH_STORAGE_KEY = "bitstream.auth.session";

/*
  Reads the persisted auth payload from localStorage.
  Returns null when nothing (or something unusable) is stored.
*/
const readStoredAuth = () => {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    const storedSessionId = parsed?.sessionId ?? parsed?.sessionid ?? null;
    if (!storedSessionId) return null;

    return {
      sessionId: storedSessionId,
      user: parsed?.user && typeof parsed.user === "object" ? parsed.user : {},
    };
  } catch (error) {
    console.warn("[AUTH] stored session is corrupted, purging it", error);
    try {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      /* storage is unavailable, nothing to purge */
    }
    return null;
  }
};

/*
  Hydrated at import time so the very first render already knows who is
  signed in (no "logged out flash" on refresh / hard navigation).
*/
const storedAuth = readStoredAuth();

export const [userInfo, SetUserInfo] = createSignal(storedAuth?.user ?? {});
export const [sessionId, SetSessionId] = createSignal(
  storedAuth?.sessionId ?? null,
);
export const [isAuthenticated, SetIsAuthenticated] = createSignal(
  Boolean(storedAuth?.sessionId),
);

/*
  Root / admin permission is owned by the backend (ROOT_KEY) and delivered on
  the session payload as `isAdmin`, so the UI can gate the dashboard without
  ever seeing the key itself.
*/
export const hasRootAccess = () => {
  if (!isAuthenticated()) return false;

  const user = userInfo();
  return (
    user.isAdmin === true ||
    user.isRoot === true ||
    user.admin === true ||
    user.root === true
  );
};

/*
  Pushes the authenticated identity into every other store that needs it,
  so all consumers stay in sync with a single source of truth.
*/
export const syncUserToStores = (user) => {
  if (!user || typeof user !== "object") return;

  const name = user.name || user.username || "";
  const email = user.email || "";
  if (!name && !email) return;

  // Only pre-fill, never overwrite what the visitor already typed.
  setFormdata((current) => ({
    name: current.name || name,
    email: current.email || email,
  }));
};

const writeStoredAuth = ({ sessionId: id, user }) => {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ sessionId: id, user, savedAt: new Date().toISOString() }),
    );
  } catch (error) {
    console.warn("[AUTH] unable to persist the session", error);
  }
};

/*
  Single entry point used after a successful login / validation.
  Updates the signals (so every component re-renders) and localStorage.
*/
export const saveAuthSession = ({ sessionId: id, user }) => {
  if (!id) return null;

  const safeUser = user && typeof user === "object" ? user : {};

  SetSessionId(id);
  SetUserInfo(safeUser);
  SetIsAuthenticated(true);

  writeStoredAuth({ sessionId: id, user: safeUser });
  syncUserToStores(safeUser);

  return safeUser;
};

/*
  localStorage -> stores. Synchronous, so it can run before the first paint.
*/
export const hydrateAuthSession = () => {
  const stored = readStoredAuth();

  if (!stored) {
    SetSessionId(null);
    SetUserInfo({});
    SetIsAuthenticated(false);
    return null;
  }

  SetSessionId(stored.sessionId);
  SetUserInfo(stored.user);
  SetIsAuthenticated(true);
  syncUserToStores(stored.user);

  return stored;
};

/*
  stores -> signed out, and the persisted copy is removed.
*/
export const clearAuthSession = () => {
  SetSessionId(null);
  SetUserInfo({});
  SetIsAuthenticated(false);

  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.warn("[AUTH] unable to purge the stored session", error);
  }
};

