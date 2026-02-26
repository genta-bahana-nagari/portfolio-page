"use client";
import { certifications } from "@/content/certification/index";
import { motion } from "framer-motion";

export default function CertificationTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {certifications.map((cert, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="max-w-md border border-gray-900 border-2 rounded-md overflow-hidden shadow-lg flex flex-col transition delay-100 duration 300 ease-in-out cursor-pointer"
        >
          <div className="relative flex flex-col h-full">
            {cert.preview && (
              <div className="relative w-full h-54">
                <img
                  src={cert.preview}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-1 gap-1 text-start">
            <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
            <p className="text-md text-gray-300 my-3">
              {cert.institution}{" "}-{" "}<span>{cert.issued_at}</span>
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
