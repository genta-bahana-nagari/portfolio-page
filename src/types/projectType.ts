export type Project = {
  name: string;
  isUnderDevelopment: boolean;
  description: string;
  techStack: string[];
  github: string | null;
  preview: string | null;
  image: string;
};