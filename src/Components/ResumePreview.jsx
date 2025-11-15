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
    <div className="w-full h-full p-8 bg-white text-gray-900 leading-relaxed overflow-y-auto rounded">
      
      {/* ================= HEADER ================= */}
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">
          {(firstName || lastName) ? `${firstName || ""} ${lastName || ""}` : "Your Name"}
        </h1>

        <p className="text-gray-600">{email || "example@gmail.com"}</p>
        <p className="text-gray-600">{phone || "+91 00000 00000"}</p>
        <p className="text-gray-600">{address || "Your Address"}</p>
      </header>

      {/* ================= SUMMARY ================= */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">Summary</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {summary || "A short professional summary will appear here..."}
        </p>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">Education</h2>

        {education.length > 0 ? (
          education.map((edu, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{edu.degree || "Degree"}</p>
              <p className="text-gray-700">{edu.school || "School / College Name"}</p>
              <p className="text-sm text-gray-500">
                {edu.startYear || "Start"} - {edu.endYear || "End"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your education details will appear here...</p>
        )}
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">Experience</h2>

        {experience.length > 0 ? (
          experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">
                {exp.position || "Job Role"} — {exp.company || "Company Name"}
              </p>
              <p className="text-sm text-gray-500">
                {exp.startDate || "Start"} - {exp.endDate || "End"}
              </p>
              <p className="text-gray-700 whitespace-pre-line">
                {exp.details || "Experience details..."}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your experience will appear here...</p>
        )}
      </section>

      {/* ================= SKILLS ================= */}
      <section>
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">Skills</h2>

        {skills.length > 0 ? (
          <ul className="list-disc ml-5 text-gray-700">
            {skills.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Your skills will appear here...</p>
        )}
      </section>

    </div>
  );
}
