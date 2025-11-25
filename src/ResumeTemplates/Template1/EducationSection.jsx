import SectionTitle from "./SectionTitle";

export default function EducationSection({ education }) {
  const placeholder = [
    {
      degree: "Degree",
      field: "Field of Study",
      school: "XYZ University",
    },
  ];

  const list = education?.length ? education : placeholder;

  return (
    <section>
      <SectionTitle title="Education" />

      <div className="text-sm text-gray-700 space-y-3">
        {list.map((edu, idx) => {
          const degree = edu.degree || placeholder[0].degree;
          const field = edu.field || placeholder[0].field;
          const school = edu.school || placeholder[0].school;

          const year =
            edu.year?.trim() ||
            edu.gradYear?.trim() ||
            edu.currentYear?.trim() ||
            placeholder[0].year;

          return (
            <div key={idx} className="space-y-1">
              <p className="font-semibold">
                {degree}
                {field ? ` — ${field}` : ""}
              </p>

              <p className="font-semibold text-gray-900">{school}</p>

              {/* Grad Year */}
              {edu.gradYear && (
                <p className="text-gray-800">Expected Graduation: {edu.gradYear}</p>
              )}

              {/* Current Year */}
              {edu.currentYear && (
                <p className="text-gray-800">Current Year: {edu.currentYear}</p>
              )}

              {/* Old UI field (year) — still supported if exists */}
              {edu.year && (
                <p className="text-gray-800">{edu.year}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
