import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skillCategories from "../data/skillData";
import SkillTab from "../components/skill/SkillTab";
import SkillItem from "../components/skill/SkillItem";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const current = skillCategories[selectedCategory];

  return (
    <div
      className="scroll-mt-20 py-16 bg-black text-white text-center"
      id="skills"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">My Skills</h2>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-8 px-4">
        {skillCategories.map((cat, idx) => (
          <SkillTab
            key={idx}
            title={cat.title}
            isActive={selectedCategory === idx}
            onClick={() => setSelectedCategory(idx)}
          />
        ))}
      </div>

      {/* Animated Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="max-w-6xl mx-auto p-6 bg-black shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">{current.title}</h3>
          <p className="text-gray-300 md:text-lg mb-6">{current.description}</p>

          {/* Responsive Grid: 6 items per row on large screens */}
          <div className="flex flex-wrap justify-center gap-6 mx-auto">
            {current.skills.map((skill, i) => (
              <SkillItem key={i} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Skills;
