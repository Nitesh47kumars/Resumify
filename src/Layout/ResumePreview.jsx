import React from "react";
import { useStep } from "../Context/StepContext";

export default function ResumePreview() {
  const { formData } = useStep();

  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    summary,
    education = [],
    experience = [],
    skills = [],
  } = formData;

  return (
    <div className="w-full h-full bg-gray-100 p-4 overflow-y-auto rounded">
      <div className="bg-white shadow-md mx-auto p-6 w-[600px] scale-[0.85] origin-top">
        
        {/* HEADER */}
        <header className="border-b pb-3 mb-4">
          <h1 className="text-2xl font-bold tracking-tight">
            {(firstName || lastName) ? `${firstName || ""} ${lastName || ""}` : "Your Name"}
          </h1>

          <p className="text-gray-600 text-sm">{email || "example@gmail.com"}</p>
          <p className="text-gray-600 text-sm">{phone || "+91 00000 00000"}</p>
          <p className="text-gray-600 text-sm">{address || "Your City, Country"}</p>
        </header>

        {/* SUMMARY */}
        <section className="mb-4">
          <h2 className="text-md font-semibold border-b pb-1 mb-1">Summary</h2>
          <p className="text-gray-700 text-sm leading-snug whitespace-pre-line">
            {summary || "A short professional summary will appear here..."}
          </p>
        </section>

        {/* EDUCATION */}
        <section className="mb-4">
          <h2 className="text-md font-semibold border-b pb-1 mb-2">Education</h2>

          {education.length ? (
            education.map((edu, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold text-sm">{edu.degree || "Degree Name"}</p>
                <p className="text-gray-700 text-sm">{edu.school || "School / College"}</p>
                <p className="text-gray-500 text-xs">
                  {edu.startYear || "Start"} - {edu.endYear || "End"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm">Your education details will appear here...</p>
          )}
        </section>

        {/* EXPERIENCE */}
        <section className="mb-4">
          <h2 className="text-md font-semibold border-b pb-1 mb-2">Experience</h2>

          {experience.length ? (
            experience.map((exp, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold text-sm">
                  {exp.position || "Job Role"} — {exp.company || "Company Name"}
                </p>
                <p className="text-gray-500 text-xs">
                  {exp.startDate || "Start"} - {exp.endDate || "End"}
                </p>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                  {exp.details || "Experience description will appear here..."}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm">Your experience will appear here...</p>
          )}
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-md font-semibold border-b pb-1 mb-2">Skills</h2>

          {skills.length ? (
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {skills.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm">Your skills will appear here...</p>
          )}
        </section>

      </div>
    </div>
  );
}
