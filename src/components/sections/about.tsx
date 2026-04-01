"use client";
import { document } from "@/lib/document";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-6 text-white pt-0 mb-12 md:mb-0 md:pt-12"
    >
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-8 lg:px-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto md:mx-0"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 md:mb-10 text-white">
            About Me
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-white/80 mb-6 md:mb-10 space-y-4">
            <span className="block">
              I'm a dedicated{" "}
              <span className="text-amber-400 font-semibold">
                Vocational High School student
              </span>
              from Yogyakarta, Indonesia. Passionate about learning and adapting
              to new challenges. I'm currently an{" "}
              <span className="text-amber-400 font-semibold">intern</span>{" "}
              student as{" "}
              <span className="text-amber-400 font-semibold">
                Fullstack Engineer
              </span>
              , gaining real-world experience while expanding my skill set.
              <br />
              <br />
              My journey is fueled by a desire to grow, make my family proud,
              and contribute meaningfully. I specialize in{" "}
              <span className="text-amber-400 font-semibold">
                Application Development, Networking,
              </span>{" "}
              and{" "}
              <span className="text-amber-400 font-semibold">
                System Administration
              </span>
              , and love solving complex problems, collaborating with teams, and
              delivering valuable solutions.
              <br />
              <br />
              Beyond tech, I am also a{" "}
              <span className="text-amber-400 font-semibold">
                culture enthusiast
              </span>{" "}
              with a deep love for the arts — especially{" "}
              <span className="text-amber-400 font-semibold">
                karawitan, musical theater, and orchestra
              </span>
              .
            </span>
          </p>

          <motion.a
            href={document.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold 
            bg-white text-black hover:bg-gray-200 transition-all duration-300 
            shadow-lg shadow-white/10 hover:shadow-white/20"
          >
            More About Me
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative h-80 w-60 md:h-144 md:w-[24rem] lg:h-128 lg:w-[24rem] rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-amber-400/10 blur-2xl scale-110 rounded-2xl" />

            <Image
              src="/images/profile/profile_3.jpg"
              alt="Profile"
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="py-6">
        <motion.div
          className="container mx-auto text-center mt-20 px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-30 sm:w-36 h-1 bg-white rounded-full mb-4 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic font-bold text-white/90 tracking-wide">
            "Help me to do it myself"
          </h2>

          <motion.div
            className="w-30 sm:w-36 h-1 bg-white rounded-full mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
