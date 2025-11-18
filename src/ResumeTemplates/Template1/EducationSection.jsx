import SectionTitle from "./SectionTitle";

export default function EducationSection({ education }) {
  const fallback = [
    {
      degree: "Bachelor of Science",
      institute: "Your University Name",
      year: "2020 - 2023",
    },
  ];

  const list = education?.length > 0 ? education : fallback;

  return (
    <section>
      <SectionTitle title="Education" />

      <div className="text-sm text-gray-700 space-y-3">
        {list.map((edu, idx) => (
          <div key={idx} className="space-y-1">
            <p>
              <span className="font-semibold">{edu.degree}</span>
            </p>

            <p className="font-semibold text-gray-900">{edu.institute}</p>

            <p className="text-gray-800">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
