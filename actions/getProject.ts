import {portfolioItem} from "../types";

export const GetProject = async () => {
  try {
    const project = await fetch(
      "https://backend-api-youtobe-totorial.vercel.app/api/portfolio/list"
    );
    const jso: portfolioItem[] = await project.json();

    if (jso) {
      return jso;
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
