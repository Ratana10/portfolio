export interface IconType {
  name: string;
  src: string;
}
export interface Project{
  name: string;
  description: string;
  technologies: string[];
}
export interface Experience{
  company: string;
  role: string;
  duration: string;
  projects: Project[];
  logo : string;
}

export interface Education{
  institution: string;
  course: string;
  duration: string;
  topics: string[];
}