import SectionTitle from "./SectionTitle";

export default function SkillsSection({ skills }) {
  // Placeholder (not real skills)
  const defaultSkills = [
    "Skill One",
    "Skill Two",
    "Skill Three",
    "Skill Four",
  ];

  const finalSkills = skills?.length > 0 ? skills : defaultSkills;

  return (
    <section>
      <SectionTitle title="Skills" />

      <ul className="grid grid-cols-2 gap-1 text-sm text-gray-700 sm:grid-cols-2">
        {finalSkills.map((skill, index) => (
          <li key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
