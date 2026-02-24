"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface ResumeTabProps {
  tabs: Tab[];
}

export default function ResumeTabs({ tabs }: ResumeTabProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 rounded-full font-semibold transition
              ${
                activeIndex === idx
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {tabs[activeIndex].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}