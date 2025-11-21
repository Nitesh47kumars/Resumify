export default function EducationSection({ education }) {
  const placeholder = [
    {
      degree: "Bachelor of Computer Applications",
      field: "Computer Applications",
      school: "XYZ University",
      gradYear: "2027",
      currentYear: "2nd Year (3rd Semester)",
    },
  ];

  const list = education?.length ? education : placeholder;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Education</h2>

      {list.map((edu, index) => (
        <div key={index} className="mb-4 leading-relaxed">
          
          {/* Degree + Field */}
          <h3 className="font-semibold">
            {edu.degree}
            {edu.field ? ` — ${edu.field}` : ""}
          </h3>

          {/* School */}
          {edu.school && (
            <p className="text-sm text-gray-700">{edu.school}</p>
          )}

          {/* Expected Graduation (optional) */}
          {edu.gradYear && (
            <p className="text-sm text-gray-600">
              Expected Graduation: {edu.gradYear}
            </p>
          )}

          {/* Current Year (optional) */}
          {edu.currentYear && (
            <p className="text-sm text-gray-600">
              Current Year: {edu.currentYear}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
