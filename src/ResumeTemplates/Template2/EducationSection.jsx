export default function EducationSection({ data }) {
    if (!data.education || data.education.length === 0) return null;
  
    return (
      <section className="">
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">
          Education
        </h2>
  
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <p className="font-semibold">{edu.degree}</p>
            <p className="text-sm text-gray-800">{edu.institution}</p>
            <p className="text-sm text-gray-700">{edu.year}</p>
          </div>
        ))}
      </section>
    );
  }
  