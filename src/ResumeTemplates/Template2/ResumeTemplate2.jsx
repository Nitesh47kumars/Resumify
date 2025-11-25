// ResumeTemplate2.jsx
// FULL TEMPLATE — Single Component — Uses useStep formData

import { useStep } from "../../Context/StepContext";

export default function ResumeTemplate2() {
  const { formData } = useStep();

  const {
    header = {},
    summary = "",
    experience = [],
    education = [],
    skills = [],
    extraComponents = [],
  } = formData;

  /* -------------------------------------
        Section Title
  -------------------------------------- */
  const SectionTitle = ({ title }) => (
    <h2 className="text-xl font-semibold text-gray-900 uppercase tracking-wide border-b pb-1 mb-3">
      {title}
    </h2>
  );

  /* -------------------------------------
        SUMMARY
  -------------------------------------- */
  const SummarySection = () => (
    <section className="mb-6">
      <SectionTitle title="Professional Summary" />
      <p className="text-sm text-gray-700 leading-relaxed">
        {summary?.trim() || "Write a short professional summary here..."}
      </p>
    </section>
  );

  /* -------------------------------------
        EXPERIENCE
  -------------------------------------- */
  const ExperienceSection = () => {
    if (!experience.length) return null;

    return (
      <section className="mb-6">
        <SectionTitle title="Experience" />

        <div className="space-y-4 text-sm text-gray-700">
          {experience.map((exp, idx) => {
            const role = exp.role?.trim() || "Job Title";
            const company = exp.company?.trim() || "Company Name";
            const duration =
              exp.duration?.trim() || exp.year?.trim() || "Start — End";

            const details = exp.details?.length
              ? exp.details
              : exp.desc?.length
              ? exp.desc
              : ["Describe your responsibilities"];

            return (
              <div key={idx} className="space-y-1">
                <p className="font-semibold text-gray-900 text-base">{role}</p>
                <p className="text-gray-800">
                  {company} • {duration}
                </p>

                <ul className="list-disc pl-5 space-y-1">
                  {details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  /* -------------------------------------
        EDUCATION
  -------------------------------------- */
  const EducationSection = () => {
    if (!education.length) return null;

    return (
      <section className="mb-6">
        <SectionTitle title="Education" />

        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="text-sm text-gray-700 space-y-1">
              <p className="font-semibold text-gray-900 text-base">
                {edu.degree || "Degree"}
              </p>
              <p className="text-gray-800">{edu.school || "Institution"}</p>
              <p className="text-gray-600">{edu.year || "Year"}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  /* -------------------------------------
        SKILLS
  -------------------------------------- */
  const SkillsSection = () => {
    if (!skills.length) return null;

    return (
      <section className="mb-6">
        <SectionTitle title="Skills" />

        <div className="flex flex-wrap gap-2 text-sm">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  };

  /* -------------------------------------
        ADDITIONAL SECTIONS (UI ONLY)
  -------------------------------------- */
  const AddSection = () => {
    if (!extraComponents.length) return null;

    const toTitleCase = (s = "") =>
      s
        .toLowerCase()
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return (
      <div className="space-y-6">
        {extraComponents.map((sec, index) => {
          const title =
            sec.category === "custom"
              ? sec.customTitle?.toUpperCase() || "CUSTOM"
              : sec.category?.toUpperCase();

          const items = Array.isArray(sec.inputs)
            ? sec.inputs
            : sec.inputs
            ? [sec.inputs]
            : [];

          if (!items.length) return null;

          return (
            <section key={index}>
              <SectionTitle title={title} />

              {/* Hobbies */}
              {sec.category === "hobbies" && (
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {items.map((item, i) => (
                    <p key={i}>{toTitleCase(item["Hobby Name"])}</p>
                  ))}
                </div>
              )}

              {/* Languages */}
              {sec.category === "languages" && (
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {items.map((item, i) => {
                    const lang = item["Language Name"];
                    const prof = item["Proficiency"];
                    if (!lang) return null;

                    return (
                      <p key={i}>
                        {toTitleCase(lang)}
                        {prof && ` – ${toTitleCase(prof)}`}
                      </p>
                    );
                  })}
                </div>
              )}

              {/* Courses */}
              {sec.category === "courses" && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {items.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <p className="font-semibold text-gray-900 flex gap-2">
                        {toTitleCase(item["Course Name"])}

                        {item["Link (Optional)"] && (
                          <a
                            href={item["Link (Optional)"]}
                            target="_blank"
                            className="text-blue-600 underline"
                          >
                            LINK
                          </a>
                        )}
                      </p>

                      {(item.Institution || item["Completion Year"]) && (
                        <p className="text-[12px] text-gray-700">
                          {item.Institution && toTitleCase(item.Institution)}
                          {item["Completion Year"] &&
                            ` – ${item["Completion Year"]}`}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Certificates */}
              {sec.category === "certificates" && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {items.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <p className="font-semibold text-gray-900 flex gap-2">
                        {toTitleCase(item["Certificate Name"])}

                        {item["Certificate URL"] && (
                          <a
                            href={item["Certificate URL"]}
                            target="_blank"
                            className="text-blue-600 underline"
                          >
                            LINK
                          </a>
                        )}
                      </p>

                      {(item["Issued By"] || item["Issue Date"]) && (
                        <p className="text-sm text-gray-700">
                          {toTitleCase(item["Issued By"] || "")}
                          {item["Issue Date"] && ` – (${item["Issue Date"]})`}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Custom */}
              {sec.category === "custom" && (
                <div className="space-y-2 text-sm">
                  {items.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <p className="font-bold text-gray-900 flex gap-2">
                        {toTitleCase(item.Name)}

                        {item.Link && (
                          <a
                            href={item.Link}
                            target="_blank"
                            className="text-blue-600 underline"
                          >
                            LINK
                          </a>
                        )}
                      </p>

                      {item.Description && (
                        <p className="text-gray-700 whitespace-pre-line">
                          {toTitleCase(item.Description)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    );
  };

  /* -------------------------------------
        MAIN LAYOUT (ICONIC TEMPLATE STYLE)
  -------------------------------------- */

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white text-gray-900 p-10 tracking-wide"
      style={{ fontFamily: "serif" }}
    >
      {/* HEADER */}
      <header className="border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          {header.firstName || "Your"} {header.lastName || "Name"}
        </h1>

        <p className="text-sm text-gray-700 mt-1">
          {header.profession || "Professional Title"}
        </p>

        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
          {header.email && <span>{header.email}</span>}
          {header.phone && <span>{header.phone}</span>}
          {(header.city || header.country) && (
            <span>
              {header.city}, {header.country}
            </span>
          )}
          {header.linkedin && (
            <a href={header.linkedin} target="_blank" className="text-blue-600">
              LinkedIn
            </a>
          )}
          {header.github && (
            <a href={header.github} target="_blank" className="text-blue-600">
              GitHub
            </a>
          )}
        </div>
      </header>

      {/* ALL SECTIONS */}
      <SummarySection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <AddSection />
    </div>
  );
}
