"use client";

import { motion } from "framer-motion";

type SkillTabProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

export function SkillTab({ title, isActive, onClick }: SkillTabProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`
        px-4 py-2 rounded-lg cursor-pointer transition-all duration-200
        text-sm md:text-md lg:text-lg border
        ${
          isActive
            ? "bg-yellow-400 text-black border-yellow-400 shadow-md"
            : "bg-black border-gray-600 hover:bg-yellow-500 hover:text-black"
        }
      `}
    >
      {title}
    </motion.button>
  );
}