export default function ExperienceSection({ data }) {
    if (!data.experience || data.experience.length === 0) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">
          Work Experience
        </h2>
  
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <p className="font-semibold">{exp.role}</p>
              <p className="text-sm text-gray-700">
                {exp.startDate} – {exp.endDate || "Present"}
              </p>
            </div>
  
            <p className="font-medium text-gray-900 mb-1">{exp.company}</p>
  
            <ul className="list-disc ml-5 text-sm space-y-1">
              {exp.description?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
  