"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeTabs from "../ui/resume/resume-tab";

import { experiences, projects, certifications } from "@/content/resume/resumes";

export function Resume() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { label: "Experience", data: experiences, color: "border-blue-600" },
    { label: "Projects", data: projects, color: "border-green-600" },
    { label: "Certification", data: certifications, color: "border-yellow-400" },
  ];

  return (
    <section
      id="resume"
      className="bg-black text-white scroll-mt-4 md:scroll-mt-24 py-14 md:py-24"
    >
      <div className="text-center mb-10 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Resume
        </h2>
        <p className="text-gray-300 mt-2 md:mt-4 text-base md:text-lg">
          My professional journey and achievements.
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center flex-wrap gap-3 md:gap-6 mb-10 px-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTab(idx)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition
              ${
                selectedTab === idx
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-6 md:px-0"
        >
          <ul className="space-y-6">
            {tabs[selectedTab].data.map((item: any, idx: number) => (
              <motion.li
                key={idx}
                className={`border-l-4 ${tabs[selectedTab].color} pl-6 py-3`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <h3 className="font-bold text-xl">{item.title || item.name}</h3>
                {item.company && (
                  <p className="text-sm text-gray-400">{item.company}</p>
                )}
                {item.institution && (
                  <p className="text-sm text-gray-400">{item.institution}</p>
                )}
                {item.period && (
                  <p className="text-xs text-gray-500">{item.period}</p>
                )}
                {item.description && (
                  <p className="mt-1 text-gray-300">{item.description}</p>
                )}
                {item.techStack && (
                  <p className="mt-1 text-gray-400 text-sm">{item.techStack}</p>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}