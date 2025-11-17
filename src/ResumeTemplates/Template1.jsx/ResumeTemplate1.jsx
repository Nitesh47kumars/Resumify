import React from "react";
import Header from "./Header";
import SummarySection from "./SummarySection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

export default function ResumeTemplate1({ data }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        padding: "40px",
        margin: "0 auto",
        background: "white",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        lineHeight: 1.5,
      }}
    >
      <Header
        name={data.name}
        email={data.email}
        phone={data.phone}
        address={data.address}
        header={data.header}
      />

      <SummarySection summary={data.summary} />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
    </div>
  );
}
