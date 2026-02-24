"use client";
import { motion, AnimatePresence } from "framer-motion";
export function Contact() {
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
            Contact Me
          </h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
