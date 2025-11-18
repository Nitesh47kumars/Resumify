import HeaderSection from "./HeaderSection";
import SummarySection from "./SummarySection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";

export default function TemplateProfessional({ data }) {
  return (
    <div className="w-[210mm] min-h-[297mm] mx-auto bg-white text-black p-10 leading-relaxed">

      <HeaderSection data={data} />
      <SummarySection data={data} />
      <SkillsSection data={data} />
      <ExperienceSection data={data} />
      <ProjectsSection data={data} />
      <EducationSection data={data} />

    </div>
  );
}
