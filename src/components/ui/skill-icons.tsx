"use client";

import { FaReact, FaNodeJs, FaBootstrap, FaLinux } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoVue } from "react-icons/io5";
import { SiNuxtdotjs, SiTailwindcss, SiPrisma, SiLaravel } from "react-icons/si";
import { FaGitAlt, FaDocker, } from "react-icons/fa";
import { SiNginx, SiMariadb, SiCisco, SiMikrotik, SiCloudflare, SiApache, SiArduino, SiRaspberrypi, SiPostman, SiFigma, SiFirebase, SiMysql } from "react-icons/si";

export const iconMap = {
  react: <FaReact className="text-cyan-400" />,
  nextjs: <TbBrandNextjs className="text-white" />,
  vue: <IoLogoVue className="text-green-400" />,
  nuxt: <SiNuxtdotjs className="text-green-300" />,
  bootstrap: <FaBootstrap className="text-purple-600" />,
  tailwind: <SiTailwindcss className="text-blue-400" />,
  node: <FaNodeJs className="text-green-500" />,
  prisma: <SiPrisma className="text-white" />,
  laravel: <SiLaravel className="text-red-500" />,
  linux: <FaLinux className="text-gray-300" />,
  arduino: <SiArduino className="text-teal-500" />,
  raspberrypi: <SiRaspberrypi className="text-red-600" />,
  firebase: <SiFirebase className="text-yellow-400" />,
  mysql: <SiMysql className="text-blue-600" />,
  mariadb: <SiMariadb className="text-blue-600" />,
  git: <FaGitAlt className="text-orange-600" />,
  docker: <FaDocker className="text-blue-500" />,
  postman: <SiPostman className="text-orange-500" />,
  figma: <SiFigma className="text-pink-500" />,
  apache: <SiApache className="text-red-600" />,
  nginx: <SiNginx className="text-green-500" />,
  cloudflare: <SiCloudflare className="text-orange-500" />,
  cisco: <SiCisco className="text-blue-400" />,
  mikrotik: <SiMikrotik className="text-blue-100" />,
};