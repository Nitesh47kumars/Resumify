import HeaderSection from "./HeaderSection";
import SummarySection from "./SummarySection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import AddSection from "./AddSection";

export default function ResumeTemplate3({ data }) {
  return (
    <div
      id="template3"
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
      <SkillsSection skills={data.skills} />
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
      <AddSection />
    </div>
  );
}
