import { motion } from "framer-motion";

const ExperienceItems = ({ name, role, year, what_i_do, image }) => {
  return (
    <motion.div
      className="
        flex flex-row items-center text-left
        bg-gradient-to-r from-gray-800 via-gray-900 to-black
        text-white p-6 rounded-xl shadow-xl w-full max-w-3xl
        hover:shadow-yellow-400/50 transition-shadow duration-300
      "
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt={name}
          className="
            h-24 w-24 md:h-32 md:w-32 object-contain rounded-lg 
            mr-6 shadow-md
          "
        />
      )}

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h3 className="text-md md:text-lg lg:text-xl font-bold tracking-wide mb-1">
          {name}
        </h3>
        <p className="text-yellow-400 text-sm md:text-base font-semibold tracking-tight">
          {role}
        </p>
        <p className="text-yellow-300 text-sm md:text-base font-semibold mb-3">
          {year}
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
          {what_i_do}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceItems;
