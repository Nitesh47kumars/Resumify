export default function ExperienceSection({ experience }) {
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Experience</h2>

      {experience.map((exp, index) => (
        <div key={index} className="mb-4">

          {exp.role && (
            <h3 className="font-semibold text-gray-800">{exp.role}</h3>
          )}

          {(exp.company || exp.duration) && (
            <p className="text-sm text-gray-600">
              {exp.company && <span>{exp.company}</span>}
              {exp.company && exp.duration && <span> • </span>}
              {exp.duration && <span>{exp.duration}</span>}
            </p>
          )}

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
