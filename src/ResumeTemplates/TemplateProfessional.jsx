export default function TemplateProfessional({ data }) {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      summary,
      skills = [],
      experience = [],
      education = [],
      projects = []
    } = data || {};
  
    return (
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-white text-black p-10 leading-relaxed">
        {/* Header */}
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold tracking-wide">
            {firstName} {lastName}
          </h1>
          <div className="text-sm mt-2 space-y-1">
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
          </div>
        </header>
  
        {/* Summary */}
        {summary && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm">{summary}</p>
          </section>
        )}
  
        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-100 px-3 py-1 rounded border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
  
        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">
              Work Experience
            </h2>
  
            {experience.map((exp, index) => (
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
        )}
  
        {/* Projects */}
        {projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">
              Projects
            </h2>
  
            {projects.map((proj, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">{proj.title}</p>
                <p className="text-sm mb-1 text-gray-800">{proj.tech}</p>
                <p className="text-sm">{proj.description}</p>
              </div>
            ))}
          </section>
        )}
  
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">
              Education
            </h2>
  
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-sm text-gray-800">{edu.institution}</p>
                <p className="text-sm text-gray-700">{edu.year}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    );
  }
  