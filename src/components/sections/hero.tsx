"use client";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { links } from "@/lib/links";
import { document } from "@/lib/document";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const images = [
  "/images/profile/profile_1.jpg",
  "/images/profile/profile_2.jpg",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center md:px-6 text-white text-center mb-12 md:mb-0 md:pt-12"
    >
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-42 h-42 md:w-60 md:h-60 md:w-60 rounded-full overflow-hidden shadow-lg shadow-black/40 md:py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={images[index]}
                alt="Genta Profile"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-extrabold md:py-4">
            Hi, I'm{" "}
            <span className="text-yellow-400">
              <Typewriter
                words={["Genta Bahana Nagari"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="mt-4 max-w-4xl mx-8 md:mx-auto text-sm md:text-base lg:text-lg leading-relaxed text-white/80 md:py-4">
            A <span className="text-yellow-400 font-semibold">Developer</span>{" "}
            who loves crafting software, passionate about{" "}
            <span className="text-yellow-400 font-semibold">
              System and Network Infrastructure
            </span>
            , and a{" "}
            <span className="text-yellow-400 font-semibold">
              Culture Enthusiast
            </span>{" "}
            with deep love for arts — especially karawitan, musical theater, and
            orchestra.
          </p>

          <div className="py-10 flex flex-wrap justify-center gap-3 md:gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold 
              bg-amber-400/90 text-black hover:bg-amber-500 transition-all duration-300 
              shadow-lg shadow-black/10 hover:shadow-black/20"
            >
              Contact Me
            </motion.a>

            <motion.a
              href={document.cv}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold 
              bg-white text-black hover:bg-gray-200 transition-all duration-300 
              shadow-lg shadow-white/10 hover:shadow-white/20"
            >
              Download CV
            </motion.a>
          </div>
        </div>

        <div className="flex flex-row items-center gap-8 text-sm text-white/60">
          {links.github && (
            <a
              href={links.github}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          )}

          {links.linkedin && (
            <a
              href={links.linkedin}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          )}

          {links.email && (
            <a
              href={links.email}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <FaEnvelope className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          )}

          {links.instagram && (
            <a
              href={links.instagram}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          )}

          {links.discord && (
            <a
              href={links.discord}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
