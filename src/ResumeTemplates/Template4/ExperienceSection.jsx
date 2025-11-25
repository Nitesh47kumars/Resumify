import React from "react";
import { SectionTitle } from "./SectionTitle";

export default function ExperienceSection({ experience }) {
  const placeholder = [
    {
      role: "Job Title",
      company: "Company Name",
      duration: "Start — End",
      details: ["Describe your responsibilities"],
    },
  ];

  const list = experience?.length ? experience : placeholder;

  return (
    <section>
      <SectionTitle title="Experience" />

      <div className="space-y-5 text-sm text-gray-700">
        {list.map((exp, idx) => {
          const role = exp.role?.trim() || exp.title?.trim() || placeholder[0].role;
          const company = exp.company?.trim() || placeholder[0].company;
          const duration =
            exp.duration?.trim() ||
            exp.year?.trim() ||
            placeholder[0].duration;

          const details =
            exp.details?.length
              ? exp.details
              : exp.desc?.length
              ? exp.desc
              : placeholder[0].details;

          return (
            <div key={idx} className="space-y-1">
              <p className="font-bold text-base text-gray-900">{role}</p>

              <p className="text-gray-800">
                {company} — {duration}
              </p>

              <ul className="list-disc pl-5 space-y-1">
                {details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
