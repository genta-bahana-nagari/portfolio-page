"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/content/skills";
import { SkillItem } from "@/components/ui/skill-item";
import { SkillTab } from "@/components/ui/skill-tab";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const current = skillCategories[selectedCategory];

  return (
    <section id="skills" className="bg-black text-white scroll-mt-24 py-14 pt-20"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">My Skills</h2>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-8 px-4">
        {skillCategories.map((cat, idx) => (
          <SkillTab
            key={idx}
            title={cat.button}
            isActive={selectedCategory === idx}
            onClick={() => setSelectedCategory(idx)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto p-4 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">{current.title}</h3>
          <p className="text-gray-300 md:text-lg mb-6">
            {current.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {current.skills.map((skill, i) => (
              <SkillItem key={i} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}