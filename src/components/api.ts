import axios, { AxiosResponse } from "axios";

// function getURL(): string {
//   let url;
//   if (import.meta.env.DEV) {
//     url = "api/experiences";
//   } else {
//     url = "https://lr-resume.herokuapp.com/api/experiences";
//   }
//   return url;
// }

async function fetchExperiences(): Promise<AxiosResponse> {
  // const url = getURL();
  return axios("api/experiences/");
}

export default fetchExperiences;
