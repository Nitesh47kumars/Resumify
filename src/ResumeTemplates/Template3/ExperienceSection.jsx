export default function ExperienceSection({ experience = [] }) {
    if (!experience.length) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Experience</h2>
  
        {experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-semibold text-sm">{exp.role}</h3>
            <p className="text-xs text-gray-600">
              {exp.company} • {exp.startDate} – {exp.endDate || "Present"}
            </p>
            <p className="text-sm mt-1 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </section>
    );
  }
  