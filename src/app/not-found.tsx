"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-6rem)] px-6 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center gap-6"
      >
        <h1 className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
          404
        </h1>

        <p className="text-base mx-12 md:text-xl text-white/70 max-w-md leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="w-16 h-[2px] bg-yellow-400/60 rounded-full" />

        <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold 
            bg-white text-black hover:bg-gray-200 transition-all duration-300 
            shadow-lg shadow-white/10 hover:shadow-white/20"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
