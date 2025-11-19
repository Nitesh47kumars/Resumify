export default function SkillsSection({ skills }) {
  const placeholderSkills = [
    { title: "Communication Skills", points: ["Public Speaking", "Team Collaboration"] },
    { title: "Technical Skills", points: ["JavaScript", "React.js", "Git"] },
  ];

  const list = skills?.length ? skills : placeholderSkills;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Core Skills</h2>

      <div className="space-y-4">
        {list.map((skill, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-800">{skill.title}</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {skill.points?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
