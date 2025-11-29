import SectionTitle from "./SectionTitle";

export default function SkillsSection({ skills }) {
  const placeholder = ["Skill 1", "Skill 2", "Skill 3"];

  let list;

  if (skills?.length && typeof skills[0] === "string") {
    list = skills;
  }
  else if (skills?.length && skills[0].items) {
    list = skills.flatMap((block) => block.items);
  }
  else {
    list = placeholder;
  }

  return (
    <section className="mb-5">
      
      <SectionTitle title="Skills" />

      <div className="flex flex-wrap gap-2">
        {list.map((item, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-gray-200 rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
