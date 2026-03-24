"use client";
import { motion } from "framer-motion";

import { experiences } from "@/content/experiences";

export function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center px-6 text-white pt-0 mb-12 md:mb-0 md:pt-12"
    >
      <motion.div
        className="flex flex-col items-center gap-8 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto md:mx-0 space-y-5 md:space-y-8"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
            Experience & Involvement
          </h3>
          <p className="mx-3 md:mx-0 text-sm md:text-base leading-relaxed text-white/90">
            A combination of professional engineering experience and
            organizational involvement, spanning full-stack development roles,
            internships, and leadership in communication and cultural
            activities.
          </p>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="shadow-lg shadow-black/70 w-full max-w-5xl mx-auto p-6 md:p-8 rounded-xl border border-white/10 bg-white/5 cursor-pointer transition delay-100 duration-300 ease-in-out hover:border-white/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                  {exp.logo && (
                    <div className="flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-16 w-16 md:h-24 md:w-24 object-contain rounded-xl shadow-inner transition-transform duration-300
                          hover:scale-105 my-0 md:my-4"
                      />
                    </div>
                  )}

                  <div className="space-y-2 text-center md:text-left flex-1">
                    <h3 className="font-semibold text-lg md:text-xl text-white">
                      {exp.title}
                    </h3>

                    <p className="text-sm md:text-base font-medium text-gray-300">
                      {exp.type}
                      <span className="text-gray-500">{" | "}{exp.period}</span>
                    </p>

                    <p className="text-base text-yellow-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed text-center md:text-left">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
