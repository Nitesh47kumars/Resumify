import HeaderSection from "./HeaderSection";
import SummarySection from "./SummarySection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";

export default function ResumeTemplateSkill({ data }) {
  return (
    <div className="bg-white p-8 w-[800px] mx-auto text-gray-900">
      <HeaderSection data={data} />
      <SummarySection summary={data.summary} />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
      <ProjectsSection projects={data.projects} />
    </div>
  );
}
