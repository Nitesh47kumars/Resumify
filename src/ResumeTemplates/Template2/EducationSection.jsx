import { SectionTitle } from "./SectionTitle";

export function EducationSection({ education }) {
  if (!education?.length) return null;

  return (
    <section className="mb-6">
      <SectionTitle title="Education" />

      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="text-sm text-gray-700 space-y-1">
            <p className="font-semibold text-gray-900 text-base">
              {edu.degree || "Degree"}
            </p>
            <p className="text-gray-800">{edu.school || "Institution"}</p>
            <p className="text-gray-600">{edu.year || "Year"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
