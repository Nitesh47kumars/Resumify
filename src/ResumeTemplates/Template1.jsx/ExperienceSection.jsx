import SectionTitle from "./SectionTitle";

export default function ExperienceSection({ experience }) {
  const fallback = [
    {
      role: "Your Job Role",
      company: "Company Name",
      year: "2022 - Present",
      desc: [
        "Achievement or responsibility goes here.",
        "Another responsibility or task goes here.",
      ],
    },
  ];

  const list = experience?.length > 0 ? experience : fallback;

  return (
    <section>
      <SectionTitle title="Experience" />

      <div className="space-y-4 text-sm text-gray-700">
        {list.map((exp, idx) => (
          <div key={idx} className="space-y-1">
            {/* Role */}
            <p className="font-semibold text-gray-900 text-base">
              {exp.role || "Your Job Role"}
            </p>

            {/* Company + Year */}
            <p className="text-gray-800">
              {exp.company || "Company Name"} • {exp.year || "2022 - Present"}
            </p>

            {/* Description bullets */}
            <ul className="list-disc pl-5 space-y-1">
              {(exp.desc?.length ? exp.desc : fallback[0].desc).map(
                (d, i) => (
                  <li key={i}>{d}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
