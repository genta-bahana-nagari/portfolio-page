"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/components/ui/skill-icons";

export function SkillItem({ icon, name }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center justify-center group cursor-pointer mx-0 md:mx-2 lg:mx-2"
      whileHover={{ scale: 1.1, rotate: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-3xl md:text-4xl lg:text-5xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
        {iconMap[icon]}
      </div>
      <p className="mt-2 text-sm font-light md:text-base md:font-medium text-gray-200">
        {name}
      </p>
    </motion.div>
  );
}