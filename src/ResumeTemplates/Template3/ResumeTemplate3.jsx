import HeaderSection from "./HeaderSection";
import SummarySection from "./SummarySection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import AddSection from "./AddSection";

export default function ResumeTemplate3({ data }) {
  return (
    <div
      id="template3"
      className="bg-white p-8 w-[500px] mx-auto text-gray-900 border shadow-sm"
    >
      <HeaderSection data={data} />
      <SummarySection summary={data.summary} />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
      <ProjectsSection projects={data.projects} />
      <AddSection />
    </div>
  );
}
