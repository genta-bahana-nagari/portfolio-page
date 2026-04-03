export type Project = {
  name: string;
  isUnderDevelopment: boolean;
  description: string;
  techStack: string[];
  github: string;
  preview: string | null;
  image: string;
};