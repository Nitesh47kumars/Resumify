import React from "react";

const ResumeTemplate1 = ({ data }) => {
  const {
    name,
    email,
    phone,
    address,
    summary,
    skills,
    experience,
    education,
    github,
  } = data || {};

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        padding: "40px",
        margin: "0 auto",
        background: "white",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        lineHeight: 1.5,
      }}
    >
      {/* ---------------------------------------- */}
      {/* REPLACED HEADER START (your Tailwind one) */}
      {/* ---------------------------------------- */}
      <header className="text-center mb-6">
        <hr className="border-gray-300" />

        {/* Name */}
        <h1 className="text-2xl my-1 font-serif font-bold text-gray-900">
          {name?.trim() || "Your Name Here"}
        </h1>

        <hr className="border-gray-300 mb-1" />

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-1 text-[13px] text-gray-700 leading-relaxed sm:text-[13px]">
          <p>{address?.trim() || "Your Address Here"}</p>

          <p>
            <a href={`tel:${phone}`} className="hover:underline">
              Phone: {phone?.trim() || "+91 00000 00000"}
            </a>{" "}
            |{" "}
            <a href={`mailto:${email}`} className="hover:underline">
              Email: {email?.trim() || "example@gmail.com"}
            </a>
          </p>

          <p>
            {data?.header?.linkedin && (
              <>
                <a
                  href={data.header.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
                {" | "}
              </>
            )}


            {data?.header?.website && (
              <>
                <a
                  href={data.header.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Portfolio
                </a>
                {" | "}
              </>
            )}

            {data?.header?.github && (
              <a
                href={data.header.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            )}

          </p>
        </div>
      </header>
      {/* ---------------------------------------- */}
      {/* REPLACED HEADER END */}
      {/* ---------------------------------------- */}

      {/* Summary */}
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
          Professional Summary
        </h2>
        <p style={{ fontSize: "15px", color: "#444" }}>
          {summary?.trim() || "Write a short professional summary here..."}
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Skills</h2>

        <ul style={{ paddingLeft: "20px", fontSize: "15px" }}>
          {(skills?.length > 0
            ? skills
            : ["Skill One", "Skill Two", "Skill Three"]
          ).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Experience</h2>

        {(experience?.length > 0
          ? experience
          : [
              {
                role: "Your Job Role",
                company: "Company Name",
                year: "2022 - Present",
                desc: [
                  "Achievement or responsibility goes here.",
                  "Another responsibility or task goes here.",
                ],
              },
            ]
        ).map((exp, idx) => (
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
                : [
                    "Achievement or responsibility goes here.",
                    "Another responsibility or task goes here.",
                  ]
              ).map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Education</h2>

        {(education?.length > 0
          ? education
          : [
              {
                degree: "Bachelor of Science",
                institute: "Your University Name",
                year: "2020 - 2023",
              },
            ]
        ).map((edu, idx) => (
          <div key={idx} style={{ marginBottom: "12px" }}>
            <strong style={{ fontSize: "16px" }}>
              {edu.degree || "Bachelor of Science"}
            </strong>

            <p style={{ margin: "0 0 4px", fontSize: "15px" }}>
              {edu.institute || "Your University Name"} • {edu.year || "2020 - 2023"}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResumeTemplate1;
