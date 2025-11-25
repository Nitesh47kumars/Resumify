import React from "react";
import { SectionTitle } from "./SectionTitle";

export default function EducationSection({ education }) {
  const list = education?.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Applications",
          field: "Computer Applications",
          school: "XYZ University",
          year: "2024",
        },
      ];

  return (
    <section>
      <SectionTitle title="Education" />

      <div className="space-y-5">
        {list.map((edu, idx) => (
          <div key={idx} className="text-sm space-y-1">
            <p className="font-semibold text-base">
              {(edu.degree || "Degree") +
                " — " +
                (edu.field || "Field of Study")}
            </p>

            <p className="text-gray-800">{edu.school || "Institution"}</p>

            <p className="text-gray-600">{edu.year || "2024"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
