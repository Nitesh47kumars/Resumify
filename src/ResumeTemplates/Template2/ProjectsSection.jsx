import React from "react";
import { useStep } from "../../Context/StepContext";
import { HeaderSection } from "./components/HeaderSection";
import { SummarySection } from "./components/SummarySection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { AddSection } from "./components/AddSection";

export default function ResumeTemplate2() {
  const { formData } = useStep();

  const {
    header = {},
    summary = "",
    experience = [],
    education = [],
    skills = [],
    extraComponents = [],
  } = formData || {};

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white text-gray-900 p-10 tracking-wide"
      style={{ fontFamily: "serif" }}
    >
      <HeaderSection header={header} />

      <SummarySection summary={summary} />

      <ExperienceSection experience={experience} />

      <EducationSection education={education} />

      <SkillsSection skills={skills} />

      <AddSection extraComponents={extraComponents} />
    </div>
  );
}
