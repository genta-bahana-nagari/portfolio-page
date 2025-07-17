import { motion } from "framer-motion";

const ExperienceItems = ({ name, role, year, what_i_do, image }) => {
  return (
    <motion.div
      className="
        flex flex-col md:flex-row items-center md:items-start
        bg-gradient-to-br from-[#1f1f1f] via-[#111] to-black
        text-white p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-md
        hover:shadow-yellow-400/30 hover:-translate-y-1 transition-all duration-300 ease-in-out
        w-full max-w-4xl mx-auto
      "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 12 }}
    >
      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt={name}
          className="
            h-24 w-24 md:h-32 md:w-32 object-contain rounded-xl
            mb-4 md:mb-0 md:mr-6 shadow-inner 
            transition-transform duration-300 hover:scale-105
          "
        />
      )}

      {/* Text Section */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight">
          {name}
        </h3>
        <p className="text-yellow-400 text-sm md:text-base font-medium mt-1">
          {role}
        </p>
        <p className="text-yellow-400 text-sm md:text-base font-medium mt-1">
          {year}
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
          {what_i_do}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceItems;
