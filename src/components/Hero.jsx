import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import image1 from "/src/assets/images/profile_1.jpg";
import image2 from "/src/assets/images/profile_2.jpg";

const images = [image1, image2];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col mt-10 items-center
      justify-center min-h-screen px-6 sm:px-8 md:px-10 bg-black text-white text-center"
    >
      <motion.div
        className="flex flex-col items-center gap-6 md:gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Container Foto Profil */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg shadow-gray-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt="Profile Picture"
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

        {/* Teks Hero */}
        <div className="mx-auto text-center">
          <h1 className="text-2xl scale-70 sm:text-3xl md:text-4xl font-extrabold">
            Hi, I'm{" "}
            <span className="text-yellow-400">
              <Typewriter
                words={["Genta Bahana Nagari"]}
                loop={false}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white mx-4 md:mx-8 lg:mx-24 lg:px-24">
            A <span className="text-yellow-400">Developer</span> who loves
            crafting software, a{" "}
            <span className="text-yellow-400">Network and System Engineer</span>{" "}
            passionate about infrastructure, and a{" "}
            <span className="text-yellow-400">Culture Enthusiast</span> with a
            deep love for arts, specially
            <span className="text-yellow-400">
              {" "}
              karawitan, musical theater, and orchestra.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-5">
            {/* Primary Action */}
            <motion.a
              href="#porto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 
    text-sm sm:text-base font-semibold bg-yellow-400 text-black shadow-md 
    transition duration-200 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              See My Works
            </motion.a>

            {/* Secondary Action */}
            <motion.a
              href={import.meta.env.VITE_YOUR_CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 
    text-sm sm:text-base font-semibold bg-white text-black shadow-md 
    transition duration-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Download CV
            </motion.a>

            {/* Tertiary Action */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 
    text-sm sm:text-base font-semibold border border-white text-white shadow-md 
    transition duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
