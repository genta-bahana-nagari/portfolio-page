import { motion } from "framer-motion";

const ProjectCard = ({ name, desc, image, previewLink, codeLink }) => {
  return (
    <motion.div
      className="flex flex-col justify-between bg-black text-white p-4 shadow-lg rounded-lg h-full w-full"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="h-36 sm:h-40 w-full object-cover rounded-md mb-4"
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
