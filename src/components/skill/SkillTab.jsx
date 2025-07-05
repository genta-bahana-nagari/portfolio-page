const SkillTab = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg cursor-pointer transition text-sm md:text-md lg:text-lg ${
      isActive
        ? "bg-yellow-400 text-black border-yellow-400 shadow-md"
        : "bg-black border border-gray-600 hover:bg-yellow-500 hover:text-black"
    }`}
  >
    {title}
  </button>
);

export default SkillTab;
