import { experiences } from "@/content/experience/index";
import { motion } from "framer-motion";

export default function ExperienceTab() {
  return (
    <div className="flex flex-col gap-10">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="cursor-pointer
            flex flex-col md:flex-row 
            items-center md:items-start
            gap-6
            bg-gradient-to-br from-[#1f1f1f] via-[#111] to-black
            text-white p-6 md:p-8
            rounded-2xl shadow-lg backdrop-blur-md
            hover:shadow-yellow-400/30 hover:-translate-y-1
            transition-all duration-300 ease-in-out
            w-full max-w-4xl mx-auto
          "
          whileInView={{ opacity: 1, x: 0 }}
        >
          {exp.logo && (
            <div className="flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.company}
                className="
                  h-20 w-20 md:h-28 md:w-28
                  object-contain rounded-xl
                  shadow-inner
                  transition-transform duration-300 hover:scale-105
                "
              />
            </div>
          )}

          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-semibold text-lg">{exp.title}</h4>
            <p className="text-yellow-400 font-semibold">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
