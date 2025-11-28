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
      className="
        text-[12px] 
        sm:text-[13px] 
        md:text-[14px] 
        lg:text-[15px]
      "
      style={{
        width: "100%",
        padding: "40px",
        margin: "0 auto",
        background: "white",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        lineHeight: 1.5,
      }}
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
