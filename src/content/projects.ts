import { Project } from "@/types/projectType";

export const projects: Project[] = [
  {
    name: "Truckora",
    isUnderDevelopment: true,
    description: "Trucks reservation platform for quick needs such as logistics, transportation, and moving services.",
    techStack: ["NextJS", "Tailwind", "Framer Motion"],
    github: null,
    preview: null,
    image: "/images/projects/Truckora.png",
  },
  {
    name: "SIJA Phone",
    isUnderDevelopment: false,
    description:
      "Simple group project about Phone Store, featured with RBAC, checkout and shipping feature.",
    techStack: ["Laravel", "Tailwind", "MySQL"],
    github: "https://github.com/genta-bahana-nagari/sija-phone",
    preview: null,
    image: "/images/projects/SIJA_Phone.png",
  },
  {
    name: "SIJA Kerja",
    isUnderDevelopment: false,
    description:
      "This project is based on the theme of Practical Exam, an information system for internship applications.",
    techStack: ["Laravel", "Livewire", "MySQL"],
    github: "https://github.com/genta-bahana-nagari/sija-kerja",
    preview: null,
    image: "/images/projects/SIJA_Kerja.png",
  },
  {
    name: "Inventory System",
    isUnderDevelopment: false,
    description:
      "Basic inventory system with high reliability and data accuracy. Used as my Laravel learning fundamental.",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/genta-bahana-nagari/sinvent24",
    preview: null,
    image: "/images/projects/Inventory_System.png",
  },
];
