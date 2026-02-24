import { experiences } from "@/content/experience/index";

export default function ExperienceTab() {
  return (
    <ul className="relative border-l-2 border-gray-700 ml-8">
      {experiences.map((exp, idx) => (
        <li key={idx} className="mb-10 ml-8 relative flex items-start">
          <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain"
              />
            )}
          </div>

          <div>
            <h4 className="font-semibold text-lg text-white">{exp.title}</h4>
            <p className="text-gray-400 text-sm">{exp.company}</p>
            <p className="text-xs text-gray-500">{exp.period}</p>
            <p className="mt-1 text-gray-300 text-sm">{exp.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}