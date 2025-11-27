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
      className="w-full max-w-4xl mx-auto bg-white text-gray-900 p-10 tracking-wide"
      style={{ fontFamily: "serif" }}
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
