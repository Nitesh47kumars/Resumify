import React from "react";
import HeaderSection from "./HeaderSection";
import SummarySection from "./SummarySection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import AddSection from "./AddSection";

export default function ResumeTemplate4({ data }) {
  const { summary, skills, experience, education } = data;

  return (
    <div
      id="template4"
      className="w-full max-w-4xl mx-auto bg-white text-gray-900 p-10"
      style={{ fontFamily: "serif" }}
    >
      <HeaderSection data={data} />

      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1 space-y-8">
          <SummarySection summary={summary} />
          <SkillsSection skills={skills} />
        </div>

        <div className="col-span-2 space-y-10">
          <ExperienceSection experience={experience} />
          <EducationSection education={education} />
          <AddSection/>
        </div>
      </div>
    </div>
  );
}
