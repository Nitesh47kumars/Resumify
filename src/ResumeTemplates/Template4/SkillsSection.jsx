import React from "react";
import { SectionTitle } from "./SectionTitle";

export default function SkillsSection({ skills }) {
  const skillList = skills?.length
    ? skills
    : ["Communication", "Teamwork", "React.js"];

  return (
    <section>
      <SectionTitle title="Skills" />

      <div className="flex flex-wrap gap-2 text-sm">
        {skillList.map((skill, idx) => (
          <span key={idx} className="px-3 py-1 bg-gray-200 rounded-full text-gray-800">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
