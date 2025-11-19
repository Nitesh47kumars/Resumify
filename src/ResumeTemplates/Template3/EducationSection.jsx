export default function EducationSection({ education = [] }) {
    if (!education.length) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Education</h2>
  
        {education.map((edu, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-semibold text-sm">{edu.degree}</h3>
            <p className="text-xs text-gray-600">
              {edu.school} • {edu.startDate} – {edu.endDate}
            </p>
          </div>
        ))}
      </section>
    );
  }
  