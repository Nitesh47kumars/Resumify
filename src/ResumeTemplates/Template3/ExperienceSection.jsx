export default function ExperienceSection({ experience }) {
  const placeholder = [
    {
      role: "Frontend Intern",
      company: "ABC Company",
      duration: "Jan 2024 — Apr 2024",
      details: ["Worked on UI components", "Improved website performance"],
    },
  ];

  // Use actual data or fallback when no experience is added
  const list = experience?.length ? experience : placeholder;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Experience</h2>

      {list.map((exp, index) => (
        <div key={index} className="mb-4">

          {/* ROLE / POSITION */}
          {exp.role && (
            <h3 className="font-semibold text-gray-800">{exp.role}</h3>
          )}

          {/* COMPANY + DURATION */}
          {(exp.company || exp.duration) && (
            <p className="text-sm text-gray-600">
              {exp.company && <span>{exp.company}</span>}
              {exp.company && exp.duration && <span> • </span>}
              {exp.duration && <span>{exp.duration}</span>}
            </p>
          )}

          {/* DETAILS LIST */}
          {exp.details?.length > 0 && (
            <ul className="list-disc ml-5 text-sm text-gray-700 mt-1">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
