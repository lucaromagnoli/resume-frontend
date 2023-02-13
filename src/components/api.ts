import axios, { AxiosResponse } from "axios";

async function fetchSection(path: string): Promise<AxiosResponse> {
  return axios(path);
}
export const fetchHome = async (): Promise<AxiosResponse> =>{
  return fetchSection("api/home/");
}
export const fetchProfile = async (): Promise<AxiosResponse> =>{
  return fetchSection("api/profile/");
}
export const fetchExperiences = async (): Promise<AxiosResponse> =>{
  return fetchSection("api/experiences/");
}