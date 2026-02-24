"use client";
import { FaGithub } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { projects } from "@/content/project/index";
import { motion, AnimatePresence } from "framer-motion";
export function Project() {
  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center px-6 bg-black text-white text-center md:pt-12"
    >
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto md:mx-0"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 md:mb-10">
            Projects and Stuffs
          </h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative flex flex-col h-full">
                {project.image && (
                  <div className="relative w-full h-48">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />

                    {project.category && (
                      <span className="absolute top-1 right-1 bg-yellow-400 text-black text-xs px-2 py-1 rounded-md">
                        {project.category}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-4 flex flex-col flex-1 text-start">
                  <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
                    {project.techStack[0].split(", ").map((tech, i) => (
                      <span key={i} className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}

                    <div className="flex flex-cols gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="text-white hover:text-gray-300"
                        >
                         <FaGithub className="h-5 w-5" />
                        </a>
                      )}
                      {project.preview && (
                        <a
                        href={project.preview}
                        target="_blank"
                        className="text-white hover:text-gray-300"
                        >
                        <CgScreen className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
