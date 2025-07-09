import image3 from "/src/assets/images/profile_3.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="bg-black text-white scroll-mt-20 py-12">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Text Section */}
        <motion.div
          className="text-center max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm md:text-lg leading-relaxed text-white">
            I'm a dedicated{" "}
            <span className="text-yellow-400 font-semibold">
              Vocational High School student
            </span>{" "}
            from Yogyakarta, Indonesia. Passionate about learning and adapting
            to new challenges. I am currently an{" "}
            <span className="text-yellow-400 font-semibold">
              intern student as Fullstack Engineer
            </span>
            , gaining real-world experience while expanding my skill set.
            <br />
            <br />
            My journey is fueled by a desire to grow, make my family proud, and
            contribute meaningfully. I specialize in{" "}
            <span className="text-yellow-400 font-semibold">
              Application Development, Networking,{" "}
            </span>
            <span className="text-white">and</span>{" "}
            <span className="text-yellow-400 font-semibold">
              System Administration
            </span>
            , and love solving complex problems, collaborating with teams, and
            delivering valuable solutions.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={image3}
            alt="Profile"
            className="h-64 w-48 sm:h-80 sm:w-60 md:h-[24rem] md:w-[18rem] lg:h-[28rem] lg:w-[20rem] object-cover rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </motion.div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        className="container mx-auto text-center mt-16 px-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="w-24 sm:w-36 h-1 bg-white rounded-full mb-4 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif italic font-bold">
          "Help me to do it myself"
        </h1>

        <motion.div
          className="w-24 sm:w-36 h-1 bg-white rounded-full mt-4 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default About;
