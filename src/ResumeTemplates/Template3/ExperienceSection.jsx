export default function ExperienceSection({ experience }) {
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Experience</h2>

      {experience.map((exp, index) => {
        // Placeholders
        const role = exp.role?.trim() || "Job Title";
        const company = exp.company?.trim() || "Company Name";
        const duration = exp.duration?.trim() || "Start — End";

        const details =
          exp.details && exp.details.length > 0
            ? exp.details
            : ["Describe your responsibilities"];

        return (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-gray-800">{role}</h3>

            <p className="text-sm text-gray-600">
              <span>{company}</span>
              <span> • </span>
              <span>{duration}</span>
            </p>

            <ul className="list-disc ml-5 text-sm text-gray-700 mt-1">
              {details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
