export type Project = {
  name: string;
  category: "Side Project" | "Group Project" | "Learning Project" | string;
  isUnderDevelopment: boolean;
  description: string;
  techStack: string[];
  github: string;
  preview: string | null;
  image: string;
};