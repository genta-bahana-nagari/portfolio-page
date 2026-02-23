import { IconKey } from "@/components/ui/skill/skill-icons";

export type Skill = {
  name: string;
  icon: IconKey;
};

export type SkillCategory = {
  button: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    button: "Frontend",
    title: "Frontend Development",
    description: "Building modern, responsive, and interactive user interfaces.",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue.js", icon: "vue" },
      { name: "Nuxt 3", icon: "nuxt" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    button: "Backend",
    title: "Backend Development",
    description: "Designing RESTful APIs, authentication systems, and scalable server-side applications.",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
  {
    button: "Database",
    title: "Database & ORM",
    description: "Designing relational databases, managing schemas, and optimizing data access layers.",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "Prisma ORM", icon: "prisma" },
      { name: "MariaDB", icon: "mariadb" },
    ],
  },
  {
    button: "DevOps",
    title: "DevOps & Infrastructure",
    description: "Managing servers, deployment configs, reverse proxies, and production infrastructure.",
    skills: [
      { name: "Cisco", icon: "cisco" },
      { name: "Mikrotik", icon: "mikrotik" },
      { name: "Apache", icon: "apache" },
      { name: "Nginx", icon: "nginx" },
      { name: "Cloudflare", icon: "cloudflare" },
    ],
  },
  {
    button: "IoT",
    title: "Internet of Things (IoT)",
    description: "Developing embedded systems and integrating hardware with web-based applications.",
    skills: [
      { name: "Arduino", icon: "arduino" },
    ],
  },
];