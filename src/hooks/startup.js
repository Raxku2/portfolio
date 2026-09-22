import { getPersonInfo, getPersonSkill } from "./info";

export const startUpFunc = async () => {
  // console.log("startup func running");
  await getPersonInfo();
  await getPersonSkill();
}
