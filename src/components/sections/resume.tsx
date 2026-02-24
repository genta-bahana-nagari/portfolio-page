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
      className="flex flex-col items-center justify-center md:max-h-screen px-6 bg-black text-white pt-12"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 items-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 md:mb-10">
            Resume
          </h3>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white/90 mb-10">
            View my professional journey and achievements.
          </p>
        </motion.div>
      </motion.div>

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
