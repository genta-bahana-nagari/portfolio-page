"use client";
import { FaGithub } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";

import { projects } from "@/content/projects";

export function Project() {
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const update = () => {
      setItemsPerSlide(window.innerWidth >= 768 ? 3 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slides = useMemo(() => {
    const result = [];
    for (let i = 0; i < projects.length; i += itemsPerSlide) {
      result.push(projects.slice(i, i + itemsPerSlide));
    }
    return result;
  }, [itemsPerSlide]);

  if (!projects?.length) {
    return (
      <section className="text-white text-center py-20">
        <p>No projects found</p>
      </section>
    );
  }

  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center px-6 text-white text-center mb-12 md:mb-0 md:pt-12"
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
          className="text-center max-w-xl mx-auto md:mx-0"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 md:mb-10">
            Featured Projects
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            A curated collection of projects where I explore ideas, solve
            real-world problems, and continuously refine my skills. Each project
            reflects my approach to building thoughtful, scalable, and
            user-focused applications.
          </p>
        </motion.div>

        <div className="max-w-7xl">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex w-full"
            >
              {slides.map((group, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-4 py-4"
                >
                  {group.map((project, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="shadow-lg shadow-black/40 flex flex-col w-full rounded-xl border border-white/10 bg-white/5 hover:border-white/20
                      transition duration-300 cursor-pointer"
                    >
                      {project.image && (
                        <div className="relative w-full h-56 overflow-hide">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          {project.isUnderDevelopment && (
                            <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/80 text-black text-xs font-semibold px-3 py-1 rounded-md shadow-xl">
                              Under Development
                            </span>
                          )}
                        </div>
                      )}

                      <div className="p-4 flex flex-col flex-1 gap-3 text-start">
                        <h3 className="font-bold text-lg">{project.name}</h3>

                        <p className="text-sm text-gray-300">
                          {project.description}
                        </p>

                        <div className="mt-auto flex flex-wrap justify-between items-center gap-4">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack?.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-black/20 text-amber-300 border border-amber-500/30 text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-4 px-2 md:px-0">
                            {project.preview && (
                              <a
                                href={project.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition"
                              >
                                <CgScreen className="h-5 w-5" />
                              </a>
                            )}
                            {project.github ? (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition"
                              >
                                <FaGithub className="h-5 w-5" />
                              </a>
                            ) : (
                              <span
                                title="Private repository"
                                className="text-gray-500 transition cursor-not-allowed"
                              >
                                <FaGithub className="h-5 w-5" />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {slides.length > 1 && (
          <div className="flex justify-center gap-4 mt-0 md:mt-6">
            <button
              onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
              className="px-3 py-3 cursor-pointer bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <IoMdArrowRoundBack />
            </button>

            <button
              onClick={() =>
                setCurrent((prev) => Math.min(prev + 1, slides.length - 1))
              }
              className="px-3 py-3 cursor-pointer bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <IoMdArrowRoundForward />
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
