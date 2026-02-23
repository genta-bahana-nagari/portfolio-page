"use client";
import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface ResumeTabProps {
  tabs: Tab[];
}

export default function ResumeTabs({ tabs }: ResumeTabProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="resume-tabs">
      <div className="flex space-x-4 border-b mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`pb-2 ${
              idx === activeIndex
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeIndex].content}</div>
    </div>
  );
}
