import React from "react";
import { useStep } from "../../Context/StepContext";

export default function AddSection() {
  const { formData } = useStep();

  const extra = formData.extraComponents || [];

  return (
    <div className="space-y-6">
      {extra.map((sec, index) => {
        const inputs = sec.inputs || {};
        const values = Object.values(inputs).filter(
          (v) => v && v.trim() !== ""
        );

        if (values.length === 0) return null;

        return (
          <div key={index} className="bg-white">

            {/* UPPERCASE SECTION TITLE */}
            <h3 className="text-md font-bold mb-0.5">
              {(sec.category || "Untitled Section").toUpperCase()}
            </h3>

            {/* Certificates special layout */}
            {sec.category === "certificates" ? (
              <div className="space-y-1">

                {/* Title + Link */}
                <div className="flex items-center gap-2">
                  {inputs["Certificate Name"] && (
                    <p className="font-semibold">{inputs["Certificate Name"]}</p>
                  )}

                  {inputs["Certificate URL"] && (
                    <a
                      href={inputs["Certificate URL"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      LINK
                    </a>
                  )}
                </div>

                {/* Issued By + Dates */}
                {(inputs["Issued By"] || inputs["Issue Date"]) && (
                  <p className="text-gray-700">
                    {inputs["Issued By"] || ""}

                    {inputs["Issue Date"] &&
                      ` – (${inputs["Issue Date"]})`}
                  </p>
                )}
              </div>
            ) : (
              /* OTHER SECTIONS UI */
              <div className="space-y-1 text-gray-800 text-sm">
                {sec.category === "hobbies" &&
                  inputs["Hobby Name"] && <p>{inputs["Hobby Name"]}</p>}

                {sec.category === "languages" && (
                  <p>
                    {inputs["Language Name"] || ""}{" "}
                    {inputs["Proficiency"] &&
                      `- ${inputs["Proficiency"]}`}
                  </p>
                )}

                {sec.category === "courses" && (
                  <>
                    <p>
                      {inputs["Course Name"]}{" "}
                      {inputs["Link (Optional)"] && (
                        <a
                          href={inputs["Link (Optional)"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm underline ml-1"
                        >
                          LINK
                        </a>
                      )}
                    </p>
                    <p>
                      {inputs["Institution"] || ""}{" "}
                      {inputs["Completion Year"] &&
                        ` - ${inputs["Completion Year"]}`}
                    </p>
                  </>
                )}

                {/* Default fallback for custom sections */}
                {sec.category === "custom" &&
                  Object.values(inputs).map(
                    (v, i) =>
                      v && (
                        <p key={i} className="text-sm">
                          {v}
                        </p>
                      )
                  )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
