export default function ExperienceSection({ experience }) {
  const placeholder = [
    {
      role: "Frontend Intern",
      company: "ABC Company",
      duration: "Jan 2024 — Apr 2024",
      details: ["Worked on UI components", "Improved website performance"],
    },
  ];

  const list = experience?.length ? experience : placeholder;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Experience</h2>

      {list.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{exp.role}</h3>
          <p className="text-sm text-gray-600">
            {exp.company} • {exp.duration}
          </p>

          <ul className="list-disc ml-5 text-sm text-gray-700">
            {exp.details?.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
