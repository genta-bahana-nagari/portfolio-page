import { motion } from "framer-motion";

const ProjectCard = ({ name, desc, image, previewLink, codeLink }) => {
  return (
    <motion.div
      className="flex flex-col justify-between border border-gray-100 p-4 bg-black text-white shadow-lg rounded-2xl h-full w-full cursor-pointer backdrop-blur-md
        hover:shadow-gray-400/60 hover:-translate-y-3 transition-all duration-300 ease-in-out"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="h-36 md:h-40 w-full object-cover rounded-lg mb-4"
        />
      )}

      <div className="flex flex-col flex-grow">
        <h4 className="text-base sm:text-lg font-semibold">{name}</h4>
        <p className="text-sm sm:text-base mt-2 text-wrap break-words">
          {desc}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {previewLink && (
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm border-b border-white hover:text-yellow-400"
          >
            Live Preview
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm border-b border-white hover:text-yellow-400"
          >
            Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
