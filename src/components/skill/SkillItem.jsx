import { motion } from "framer-motion";

const SkillItem = ({ icon, name }) => (
  <motion.div
    className="flex flex-col items-center text-center justify-center group cursor-pointer"
    whileHover={{ scale: 1.1, rotate: -2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-3xl md:text-4xl lg:text-5xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
      {icon}
    </div>
    <p className="mt-2 text-sm md:text-base font-medium text-gray-200 group-hover:text-yellow-300 transition-colors duration-200">
      {name}
    </p>
  </motion.div>
);

export default SkillItem;
