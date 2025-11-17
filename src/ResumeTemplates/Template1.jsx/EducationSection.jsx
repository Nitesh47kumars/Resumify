export default function EducationSection({ education }) {
    const fallback = [
      {
        degree: "Bachelor of Science",
        institute: "Your University Name",
        year: "2020 - 2023",
      },
    ];
  
    const list = education?.length > 0 ? education : fallback;
  
    return (
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Education</h2>
  
        {list.map((edu, idx) => (
          <div key={idx} style={{ marginBottom: "12px" }}>
            <strong style={{ fontSize: "16px" }}>
              {edu.degree}
            </strong>
  
            <p style={{ margin: "0 0 4px", fontSize: "15px" }}>
              {edu.institute} • {edu.year}
            </p>
          </div>
        ))}
      </section>
    );
  }
  