// skillData.js
import { IoLogoVue } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillGitlab } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaLinux,
  FaProjectDiagram,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaCloudflare,
} from "react-icons/fa";
import {
  SiNuxtdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiNodered,
  SiArduino,
  SiMariadb,
  SiMikrotik,
  SiCisco,
  SiNginx,
  SiNginxproxymanager,
  SiApache,
  SiPrisma,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Frontend development focuses on building interactive and visually appealing user interfaces.",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <TbBrandNextjs className="text-white" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-400" />,
      },
      { name: "Vue.js", icon: <IoLogoVue className="text-green-400" /> },
      { name: "Nuxt3", icon: <SiNuxtdotjs className="text-green-300" /> },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Backend development involves handling server-side logic, databases, and APIs.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MySQL", icon: <FaDatabase className="text-indigo-400" /> },
      { name: "Prisma", icon: <SiPrisma className="text-white" /> },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="text-blue-700" />,
      },
      { name: "MariaDB", icon: <SiMariadb className="text-white" /> },
      { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    ],
  },
  {
    title: "IoT Development",
    description:
      "IoT Development connects hardware with software to create smart systems.",
    skills: [
      { name: "Arduino", icon: <SiArduino className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
      { name: "Node-RED", icon: <SiNodered className="text-red-600" /> },
    ],
  },
  {
    title: "Linux Management",
    description:
      "Managing Linux systems for servers, automation, and security.",
    skills: [
      { name: "Linux", icon: <FaLinux className="text-gray-300" /> },
      { name: "Nginx", icon: <SiNginx className="text-green-400" /> },
      {
        name: "Proxy Manager",
        icon: <SiNginxproxymanager className="text-white" />,
      },
      { name: "Apache", icon: <SiApache className="text-[#D22128]" /> },
      {
        name: "Cloudflare",
        icon: <FaCloudflare className="text-orange-400" />,
      },
    ],
  },
  {
    title: "Network Administration",
    description:
      "Network administration involves configuring and managing networks.",
    skills: [
      { name: "Cisco Router", icon: <SiCisco className="text-blue-400" /> },
      {
        name: "Mikrotik Router",
        icon: <SiMikrotik className="text-white" />,
      },
    ],
  },
  {
    title: "Project Management",
    description:
      "Utilizing Agile methodologies and planning tools to deliver high-quality projects.",
    skills: [
      {
        name: "Project Planning",
        icon: <FaProjectDiagram className="text-yellow-400" />,
      },
      { name: "GitLab", icon: <AiFillGitlab className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      {
        name: "Agile & Scrum",
        icon: <FaProjectDiagram className="text-green-400" />,
      },
    ],
  },
];

export default skillCategories;
