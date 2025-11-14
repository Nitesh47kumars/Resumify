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
    education = [],
    summary,
    experience = [],
    skills = [],
  } = formData;

  return (
    <div className="w-full h-full p-6 bg-white shadow-lg overflow-y-auto rounded-lg">
      {/* HEADER */}
      <div className="border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          {firstName || "Your"} {lastName || "Name"}
        </h1>
        <p className="text-gray-600">{email || "email@example.com"}</p>
        <p className="text-gray-600">{phone || "+91 00000 00000"}</p>
        <p className="text-gray-600">{address || "Your Address"}</p>
      </div>

      {/* SUMMARY */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Summary</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {summary || "A brief professional summary will appear here."}
        </p>
      </div>

      {/* EDUCATION */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Education</h2>
        {education.length > 0 ? (
          education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold text-gray-900">
                {edu.degree} — {edu.school}
              </p>
              <p className="text-gray-700 text-sm">
                {edu.startYear} - {edu.endYear}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Add education to see it here.</p>
        )}
      </div>

      {/* EXPERIENCE */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Experience</h2>
        {experience.length > 0 ? (
          experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold text-gray-900">
                {exp.position} — {exp.company}
              </p>
              <p className="text-sm text-gray-700">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-gray-700 whitespace-pre-line">{exp.details}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Add experience to see it here.</p>
        )}
      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
        {skills.length > 0 ? (
          <ul className="list-disc ml-6 text-gray-700">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Add skills to list them here.</p>
        )}
      </div>
    </div>
  );
}
