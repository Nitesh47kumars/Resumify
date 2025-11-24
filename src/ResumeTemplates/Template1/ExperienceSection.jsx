import SectionTitle from "./SectionTitle";

export default function ExperienceSection({ experience }) {
  // If no data → follow Template 2 behavior (return null)
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <section>
      <SectionTitle title="Experience" />

      <div className="space-y-4 text-sm text-gray-700">
        {experience.map((exp, idx) => {
          // Template 2 functional placeholders
          const role = exp.role?.trim() || "Job Title";
          const company = exp.company?.trim() || "Company Name";
          const duration =
            exp.duration?.trim() ||
            exp.year?.trim() ||
            "Start — End";

          const details =
            exp.details?.length > 0
              ? exp.details
              : exp.desc?.length > 0
              ? exp.desc
              : ["Describe your responsibilities"];

          return (
            <div key={idx} className="space-y-1">
              {/* Role */}
              <p className="font-semibold text-gray-900 text-base">{role}</p>

              {/* Company + Duration */}
              <p className="text-gray-800">
                {company} • {duration}
              </p>

              {/* Description Bullets */}
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
