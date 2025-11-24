import SectionTitle from "./SectionTitle";

export default function SkillsSection({ skills }) {
  const placeholder = ["Skill 1", "Skill 2", "Skill 3"];

  let list;

  // Logic preserved exactly from Template 2
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
    <section>
      <SectionTitle title="Skills" />

      <ul className="grid grid-cols-2 gap-1 text-sm text-gray-700 sm:grid-cols-2">
        {list.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
