import { SectionTitle } from "./SectionTitle";

export function ExperienceSection({ experience }) {
  if (!experience?.length) return null;

  return (
    <section className="mb-6">
      <SectionTitle title="Experience" />

      <div className="space-y-4 text-sm text-gray-700">
        {experience.map((exp, idx) => {
          const role = exp.role?.trim() || "Job Title";
          const company = exp.company?.trim() || "Company Name";
          const duration =
            exp.duration?.trim() || exp.year?.trim() || "Start — End";

          const details = exp.details?.length
            ? exp.details
            : exp.desc?.length
            ? exp.desc
            : ["Describe your responsibilities"];

          return (
            <div key={idx} className="space-y-1">
              <p className="font-semibold text-gray-900 text-base">{role}</p>
              <p className="text-gray-800">
                {company} • {duration}
              </p>

              <ul className="list-disc pl-5 space-y-1">
                {details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
