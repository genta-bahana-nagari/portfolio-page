import { Project } from "@/types/projectType";

export const projects: Project[] = [
  {
    name: "SIJA Phone",
    category: "Group Project",
    isUnderDevelopment: false,
    description: "Simple group project about Phone Store, featured with RBAC, checkout and shipping feature.",
    techStack: ["Laravel", "Tailwind", "MySQL"],
    github: "https://github.com/genta-bahana-nagari/sija-phone",
    preview: null,
    image: "/images/projects/SIJA_Phone.png",
  },
  {
    name: "SIJA Kerja",
    category: "Learning Project",
    isUnderDevelopment: false,
    description: "This project is based on the theme of Practical Exam, an information system for internship applications.",
    techStack: ["Laravel", "Livewire", "MySQL"],
    github: "https://github.com/genta-bahana-nagari/sija-kerja",
    preview: null,
    image: "/images/projects/SIJA_Kerja.png",
  },
  {
    name: "Inventory System",
    category: "Learning Project",
    isUnderDevelopment: false,
    description: "Basic inventory system with high reliability and data accuracy. Used as my Laravel learning fundamental.",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/genta-bahana-nagari/sinvent24",
    preview: null,
    image: "/images/projects/Inventory_System.png",
  },
];