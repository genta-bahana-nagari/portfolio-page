"use client";

import ResumeTabs from "@/components/ui/resume/resume-tab";
import ExperienceTab from "@/components/ui/resume/experience-tab";
import CertificationTab from "@/components/ui/resume/certification-tab";
import { motion } from "framer-motion";

export function Resume() {
  const tabs = [
    {
      label: "Experience",
      content: <ExperienceTab />,
    },
    {
      label: "Certification",
      content: <CertificationTab />,
    },
  ];

  return (
    <section
      id="resume"
      className="flex flex-col items-center px-6 bg-black text-white pt-0 mb-12 md:mb-0 md:pt-12"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 items-center">
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 md:mb-10"
          >
            My Resume
          </motion.h3>
        </div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 mt-2 md:mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <ResumeTabs tabs={tabs} />
      </motion.div>
    </section>
  );
}
