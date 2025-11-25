import { SectionTitle } from "./SectionTitle";

export function EducationSection({ education }) {
  const placeholder = [
    {
      degree: "Degree",
      field: "Field of Study",
      school: "XYZ University",
    },
  ];

  const list = education?.length ? education : placeholder;

  return (
    <section className="mb-6">
      <SectionTitle title="Education" />

      <div className="space-y-4">
        {list.map((edu, idx) => {
          const degree = edu.degree?.trim() || placeholder[0].degree;
          const field = edu.field?.trim() || placeholder[0].field;
          const school = edu.school?.trim() || placeholder[0].school;

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

              {edu.gradYear && (
                <p className="text-gray-800">Expected Graduation: {edu.gradYear}</p>
              )}

              {edu.currentYear && (
                <p className="text-gray-800">Current Year: {edu.currentYear}</p>
              )}

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
