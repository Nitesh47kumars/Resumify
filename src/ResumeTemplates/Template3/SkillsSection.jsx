export default function SkillsSection({ skills = [] }) {
    if (!skills.length) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Skills</h2>
  
        <ul className="grid grid-cols-2 gap-1 text-sm">
          {skills.map((skill, i) => (
            <li key={i}>• {skill}</li>
          ))}
        </ul>
      </section>
    );
  }
  