export default function ExperienceSection({ experience }) {
    const fallback = [
      {
        role: "Your Job Role",
        company: "Company Name",
        year: "2022 - Present",
        desc: [
          "Achievement or responsibility goes here.",
          "Another responsibility or task goes here.",
        ],
      },
    ];
  
    const list = experience?.length > 0 ? experience : fallback;
  
    return (
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Experience</h2>
  
        {list.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: "16px" }}>
            <strong style={{ fontSize: "16px" }}>
              {exp.role || "Your Job Role"}
            </strong>
  
            <p style={{ margin: "0 0 4px", fontSize: "15px" }}>
              {exp.company || "Company Name"} • {exp.year || "2022 - Present"}
            </p>
  
            <ul style={{ paddingLeft: "20px", color: "#444", fontSize: "15px" }}>
              {(exp.desc?.length
                ? exp.desc
                : fallback[0].desc
              ).map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
  