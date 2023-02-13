import axios, { AxiosResponse } from "axios";

async function fetchExperiences(): Promise<AxiosResponse> {
  // const url = getURL();
  return axios("api/experiences/");
}

export default fetchExperiences;
