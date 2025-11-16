const TemplatePreviewCanvas = ({ data }) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      summary,
      education,
      experience,
      skills
    } = data;
  
    return (
      <div className="w-[800px] min-h-[1000px] bg-white shadow-md p-10 mx-auto text-black">
  
        {/* HEADER */}
        <h1 className="text-4xl font-bold">
          {(firstName || "Your") + " " + (lastName || "Name")}
        </h1>
  
        <p className="text-gray-700 mt-1">
          {email || "xyz@gmail.com"} | {phone || "000-000-0000"} | {address || "Your City"}
        </p>
  
        <hr className="my-4" />
  
        {/* SUMMARY */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700">
            {summary || "A motivated individual looking for opportunities to grow and contribute effectively."}
          </p>
        </section>
  
        <hr className="my-4" />
  
        {/* EDUCATION */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
  
          {education.length === 0 ? (
            <p className="text-gray-600">No education added yet</p>
          ) : (
            education.map((edu, index) => (
              <div key={index} className="mb-2">
                <p className="font-bold">{edu.degree}</p>
                <p className="text-sm">{edu.school}</p>
                <p className="text-sm text-gray-600">{edu.start} - {edu.end}</p>
              </div>
            ))
          )}
        </section>
  
        <hr className="my-4" />
  
        {/* EXPERIENCE */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
  
          {experience.length === 0 ? (
            <p className="text-gray-600">No experience added yet</p>
          ) : (
            experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <p className="font-bold">{exp.position}</p>
                <p className="text-sm">{exp.company}</p>
                <p className="text-sm text-gray-600">{exp.start} - {exp.end}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))
          )}
        </section>
  
        <hr className="my-4" />
  
        {/* SKILLS */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
  
          {skills.length === 0 ? (
            <p className="text-gray-600">No skills added yet</p>
          ) : (
            <ul className="list-disc ml-6 text-gray-700">
              {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          )}
        </section>
  
      </div>
    );
  };
  
  export default TemplatePreviewCanvas;
  