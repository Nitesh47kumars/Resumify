import React from "react";
import { useStep } from "../../Context/StepContext";

export default function AddSection() {
  const { formData } = useStep();
  const extra = formData.extraComponents || [];

  return (
    <div className="space-y-4">
      {extra.map((sec, index) => {
        const raw = sec.inputs;
        const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
        if (list.length === 0) return null;

        const sectionTitle =
          sec.category === "custom"
            ? (sec.customTitle || "CUSTOM").toUpperCase()
            : (sec.category || "Untitled Section").toUpperCase();

        return (
          <div key={index} className="bg-white rounded-md">
            <h3 className="text-lg font-bold mb-2">{sectionTitle}</h3>

            {/* Hobbies */}
            {sec.category === "hobbies" && (
              <div className="grid grid-cols-2 gap-2">
                {list.map((entry, i) =>
                  entry["Hobby Name"] ? (
                    <p key={i} className="uppercase text-sm text-gray-800">
                      {entry["Hobby Name"]}
                    </p>
                  ) : null
                )}
              </div>
            )}

            {/* Languages */}
            {sec.category === "languages" && (
              <div className="grid grid-cols-2 gap-2">
                {list.map((entry, i) => {
                  const lang = entry["Language Name"];
                  const prof = entry["Proficiency"];
                  if (!lang) return null;

                  return (
                    <p key={i} className="uppercase text-sm text-gray-800">
                      {lang}
                      {prof && ` - ${prof}`}
                    </p>
                  );
                })}
              </div>
            )}

            {/* Courses */}
            {sec.category === "courses" && (
              <div className="space-y-3">
                {list.map((entry, i) => (
                  <div key={i}>
                    <p className="font-semibold uppercase text-sm text-gray-900">
                      {entry["Course Name"]}

                      {entry["Link (Optional)"] && (
                        <a
                          href={entry["Link (Optional)"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline ml-2"
                        >
                          LINK
                        </a>
                      )}
                    </p>

                    {(entry["Institution"] || entry["Completion Year"]) && (
                      <p className="text-sm text-gray-700">
                        {entry["Institution"] || ""}
                        {entry["Completion Year"] &&
                          ` – ${entry["Completion Year"]}`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Certificates */}
            {sec.category === "certificates" && (
              <div className="space-y-3">
                {list.map((entry, i) => (
                  <div key={i}>
                    <p className="font-semibold uppercase text-sm text-gray-900 flex items-center gap-2">
                      {entry["Certificate Name"]}

                      {entry["Certificate URL"] && (
                        <a
                          href={entry["Certificate URL"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          LINK
                        </a>
                      )}
                    </p>

                    {(entry["Issued By"] || entry["Issue Date"]) && (
                      <p className="text-sm text-gray-700">
                        {entry["Issued By"] || ""}
                        {entry["Issue Date"] &&
                          ` – (${entry["Issue Date"]})`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Custom */}
            {sec.category === "custom" && (
              <div className="space-y-2">
                {list.map((entry, i) => {
                  const name = entry["Name"];
                  const link = entry["Link"];
                  const desc = entry["Description"];

                  if (!name && !desc) return null;

                  return (
                    <div key={i} className="space-y-1">
                      <p className="font-bold uppercase text-sm text-gray-900 flex items-center gap-2">
                        {name}

                        {link && (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            LINK
                          </a>
                        )}
                      </p>

                      {desc && (
                        <p className="text-sm text-gray-700 whitespace-pre-line">
                          {desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
