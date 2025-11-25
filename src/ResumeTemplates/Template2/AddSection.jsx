import React from "react";
import { SectionTitle } from "./SectionTitle";

export function AddSection({ extraComponents = [] }) {
  if (!extraComponents?.length) return null;

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

        const hasValid = items.some((it) =>
          Object.values(it || {}).some(
            (v) => v && String(v).trim() !== ""
          )
        );
        if (!hasValid) return null;

        return (
          <section key={index}>
            <SectionTitle title={title} />

            {/* --------------------- HOBBIES ---------------------- */}
            {sec.category === "hobbies" && (
              <div className="grid grid-cols-2 gap-2 text-sm">
                {items.map((item, i) =>
                  item["Hobby Name"] ? (
                    <p key={i}>{toTitleCase(item["Hobby Name"])}</p>
                  ) : null
                )}
              </div>
            )}

            {/* --------------------- LANGUAGES ---------------------- */}
            {sec.category === "languages" && (
              <div className="grid grid-cols-2 gap-2 text-sm">
                {items.map((item, i) => {
                  const lang = item["Language Name"];
                  const prof = item["Proficiency"];
                  if (!lang) return null;

                  return (
                    <p key={i}>
                      {toTitleCase(lang)}
                      {prof ? ` – ${toTitleCase(prof)}` : ""}
                    </p>
                  );
                })}
              </div>
            )}

            {/* --------------------- COURSES ---------------------- */}
            {sec.category === "courses" && (
              <div className="grid grid-cols-2 gap-4 text-sm">
                {items.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <p className="font-semibold text-gray-900 flex gap-2">
                      {toTitleCase(item["Course Name"] || "")}
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
                        {item.Institution &&
                          toTitleCase(item.Institution)}
                        {item["Completion Year"] &&
                          ` – ${item["Completion Year"]}`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* --------------------- CERTIFICATES ---------------------- */}
            {sec.category === "certificates" && (
              <div className="grid grid-cols-2 gap-4 text-sm">
                {items.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <p className="font-semibold text-gray-900 flex gap-2">
                      {toTitleCase(item["Certificate Name"] || "")}
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
                        {item["Issued By"] &&
                          toTitleCase(item["Issued By"])}
                        {item["Issue Date"] &&
                          ` – (${item["Issue Date"]})`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* --------------------- CUSTOM ---------------------- */}
            {sec.category === "custom" && (
              <div className="space-y-2 text-sm">
                {items.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <p className="font-bold text-gray-900 flex gap-2">
                      {toTitleCase(item.Name || "")}
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
}
