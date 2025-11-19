export default function EducationSection({ education }) {
  const placeholder = [
    {
      degree: "Bachelor of Computer Applications",
      school: "XYZ University",
      duration: "2022 - 2025",
    },
  ];

  const list = education?.length ? education : placeholder;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Education</h2>

      {list.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{edu.degree}</h3>
          <p className="text-sm text-gray-700">{edu.school}</p>
          <p className="text-sm text-gray-600">{edu.duration}</p>
        </div>
      ))}
    </section>
  );
}
