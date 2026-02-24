import { experiences } from "@/content/experience/index";
import { motion } from "framer-motion";

export default function ExperienceTab() {
  return (
    <div className="relative flex flex-col gap-10">
      <div className="absolute left-4 top-6 bottom-6 w-[2px] bg-gray-700" />
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative gap-2 items-center pl-8 md:pl-12">
          <div className="absolute left-2 top-6 md:top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-yellow-400" />
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-in-out w-full max-w-4xl mx-auto"
            whileInView={{ opacity: 1, x: 0 }}
          >
            {exp.logo && (
              <div className="flex flex-shrink-0 items-center justify-center">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="
                  h-16 w-16 md:h-28 md:w-28
                  object-contain rounded-xl
                  shadow-inner
                  transition-transform duration-300 hover:scale-105
                "
                />
              </div>
            )}

            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-semibold text-lg">{exp.title}</h4>
              <h4 className="text-sm font-thin text-lg">
                {exp.type}
                {" "}<span className="text-sm text-gray-400">({exp.period})</span>
              </h4>
                <p className="text-base text-yellow-400 font-semibold">
                  {exp.company}
                </p>
              
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
