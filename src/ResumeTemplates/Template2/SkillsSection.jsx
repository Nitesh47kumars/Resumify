export default function SkillsSection({ data }) {
    if (!data.skills || data.skills.length === 0) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h2>
  
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 px-3 py-1 rounded border"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  