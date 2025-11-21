export default function SkillsSection({ skills }) {
  const placeholder = [
    { category: "Communication", items: ["Public Speaking", "Team Leadership"] },
    { category: "Technical", items: ["JavaScript", "React.js", "Git"] },
  ];

  let list;

  if (skills?.length && typeof skills[0] === "string") {
    list = [
      {
        category: "Skills",
        items: skills,
      },
    ];
  } 
  else if (skills?.length && skills[0].items) {
    list = skills;
  } 
  else {
    list = placeholder;
  }

  return (
    <section className="mb-5">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {list.map((block, index) => (
          <div key={index} className="space-y-1">
            <h3 className="font-semibold text-gray-800 text-lg uppercase tracking-wide">
              {block.category}
            </h3>

            <div className="flex flex-wrap gap-1">
              {block.items.map((item, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-xs bg-gray-200 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
