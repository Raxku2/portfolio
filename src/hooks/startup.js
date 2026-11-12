import { getPersonInfo, getPersonProjects, getPersonSkill } from "./info";
import { captureSessionFromUrl, restoreAuthSession } from "./session";

export const startUpFunc = async () => {
  // 1. OAuth landing: the backend appends ?session=<id> to the redirect URL.
  //    Validating it stores the user in localStorage + every global store.
  const redirectedUser = await captureSessionFromUrl();

  // 2. Normal page load / refresh: localStorage -> stores (synchronous) and a
  //    background revalidation so expired sessions sign the user out.
  if (!redirectedUser) {
    restoreAuthSession();
  }

  await Promise.all([getPersonInfo(), getPersonSkill(), getPersonProjects()]);
};
