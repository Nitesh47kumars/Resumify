import React from "react";
import { HeaderSection } from "./HeaderSection";
import { SummarySection } from "./SummarySection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { SkillsSection } from "./SkillsSection";
import { AddSection } from "./AddSection";
import { useStep } from "../../Context/StepContext";

export default function ResumeTemplate2({ data = {} }) {
  const { formData } = useStep();
  const extraComponents = formData.extraComponents || [];

  return (
    <div
      id="template2"
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
      <SummarySection summary={data.summary} />
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
      <SkillsSection skills={data.skills} />
      <AddSection extraComponents={extraComponents} />
    </div>
  );
}
