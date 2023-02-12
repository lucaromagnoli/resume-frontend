import {Experience} from "./experience";
import axios, {AxiosResponse} from "axios";

const url = "api/experiences"

const config = {
  url
}
async function fetchExperiences(): Promise<AxiosResponse> {
  return axios(url);
}

export default fetchExperiences;
