import { SetPortfolioInfo, SetSkills } from "../stores";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const getPersonInfo = async () => {
  // console.log(BASE_URL);
  // console.log("get portfolio info");

  try {
    const res = await fetch(
      BASE_URL + "/portfolio/info/6a9f92fef914115607467d78",
    );

    if (res.status !== 200) {
      console.log(res);
      return;
    }

    const result = await res.json();
    // console.log(result);
    SetPortfolioInfo(result.result);
  } catch (error) {
    console.log(error);
  }
};

export const getPersonSkill = async () => {
  // console.log("get portfolio Skills");
  try {
    const res = await fetch(BASE_URL + "/portfolio/skills");

    if (res.status !== 200) {
      console.log(res);
      return;
    }

    const result = await res.json();
    // console.log(result);
    SetSkills(result.result);
  } catch (error) {
    console.log(error);
  }
};

export const getPersonProjects = async () => {
  console.log("get portfolio info");
};
