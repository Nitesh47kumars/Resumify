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
      className="bg-white mx-auto text-gray-900 border shadow-sm"
      style={{
        width: "794px",        // Exact A4 width
        minHeight: "1123px",   // A4 height
        padding: "32px",       // same as p-8
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
