import { SectionTitle } from "./SectionTitle";

export function SkillsSection({ skills }) {
  // If skills empty → show placeholder skills  
  const finalSkills =
    skills && skills.length > 0
      ? skills
      : ["Skill One", "Skill Two", "Skill Three"];

  return (
    <section className="mb-6">
      <SectionTitle title="Skills" />

      <div className="flex flex-wrap gap-2 text-sm">
        {finalSkills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
