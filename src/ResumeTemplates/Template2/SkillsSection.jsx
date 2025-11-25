import { SectionTitle } from "./SectionTitle";

export function SkillsSection({ skills }) {
  if (!skills?.length) return null;

  return (
    <section className="mb-6">
      <SectionTitle title="Skills" />

      <div className="flex flex-wrap gap-2 text-sm">
        {skills.map((skill, idx) => (
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
