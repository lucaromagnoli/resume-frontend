export interface Tech {
  key: number;
  name: string;
  version: string;
  libraries: Array<string>;
}

export interface Experience {
  key: number;
  startDate: string;
  endDate: string;
  role: string;
  companyName: string;
  description: string;
  technologies: Array<Tech>;
}
