"use client";

import ResumeTabs from "@/components/ui/resume/resume-tab";
import {
  experiences,
  projects,
  certifications,
} from "@/content/resume/resumes";

export function Resume() {
  const tabs = [
    {
      label: "Projects",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-1">{proj.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{proj.description}</p>
                <p className="text-gray-400 text-xs mb-2">{proj.techStack}</p>
                <div className="mt-auto flex gap-2">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {proj.preview && (
                    <a
                      href={proj.preview}
                      target="_blank"
                      className="text-green-400 hover:underline"
                    >
                      Preview
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Experience",
      content: (
        <ul className="relative border-l-2 border-gray-700 ml-8">
          {experiences.map((exp, idx) => (
            <li key={idx} className="mb-10 ml-8 relative flex items-start">
              {/* Timeline circle with logo */}
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gray-900 border-2 border-yellow-400 flex items-center justify-center overflow-hidden">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-8 h-8 object-contain"
                  />
                )}
              </div>

              {/* Experience content */}
              <div>
                <h4 className="font-semibold text-lg text-white">
                  {exp.title}
                </h4>
                <p className="text-gray-400 text-sm">{exp.company}</p>
                <p className="text-xs text-gray-500">{exp.period}</p>
                <p className="mt-1 text-gray-300 text-sm">{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "Certification",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden p-4 flex flex-col justify-between"
            >
              {cert.preview && (
                <iframe
                  src={cert.preview}
                  className="h-40 w-full object-cover mb-2"
                  title={cert.name}
                />
              )}
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.institution}</p>
              <p className="text-xs text-gray-500">{cert.year}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section
      id="resume"
      className="bg-black text-white scroll-mt-4 md:scroll-mt-24 py-14 md:py-24"
    >
      <div className="text-center mb-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Resume</h2>
        <p className="text-gray-300 text-sm md:text-base">
          My professional journey and achievements.
        </p>
      </div>

      <ResumeTabs tabs={tabs} />
    </section>
  );
}
