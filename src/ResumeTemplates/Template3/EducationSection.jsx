import SectionTitle from "./SectionTitle";

export default function EducationSection({ education }) {
  const placeholder = [
    {
      degree: "Bachelor of Computer Applications",
      field: "Computer Applications",
      school: "XYZ University",
    },
  ];

  const list = education?.length ? education : placeholder;

  return (
    <section className="mb-6">
      <SectionTitle title="Education"/>

      {list.map((edu, index) => {
        const degree = edu.degree || placeholder[0].degree;
        const field = edu.field || placeholder[0].field;
        const school = edu.school || placeholder[0].school;

        return (
          <div key={index} className="mb-4 leading-relaxed">
            <h3 className="font-semibold">
              {degree}
              {field ? ` — ${field}` : ""}
            </h3>

            <p className="text-sm text-gray-700">{school}</p>

            {edu.gradYear && (
              <p className="text-sm text-gray-600">
                Expected Graduation: {edu.gradYear}
              </p>
            )}

            {edu.currentYear && (
              <p className="text-sm text-gray-600">
                Current Year: {edu.currentYear}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
}
