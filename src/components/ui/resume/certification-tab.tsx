import { certifications } from "@/content/certification/index";

export default function CertificationTab() {
  return (
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
  );
}