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
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-12">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition border
              border-gray-600 hover:bg-yellow-400 hover:text-black cursor-pointer
              ${
                activeIndex === idx
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-black text-gray-300 hover:bg-gray-700"
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