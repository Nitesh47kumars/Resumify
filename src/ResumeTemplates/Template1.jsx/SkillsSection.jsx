export default function SkillsSection({ skills }) {
    const defaultSkills = ["Skill One", "Skill Two", "Skill Three"];
  
    return (
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Skills</h2>
  
        <ul style={{ paddingLeft: "20px", fontSize: "15px" }}>
          {(skills?.length > 0 ? skills : defaultSkills).map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>
    );
  }
  