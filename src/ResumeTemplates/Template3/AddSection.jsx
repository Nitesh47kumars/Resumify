import React from "react";
import { useStep } from "../../Context/StepContext";

export default function AddSection() {
  const { formData } = useStep();

  const extra = formData.extraComponents || [];

  return (

        <div className="space-y-4">
          {extra.map((sec, index) => (
            <div
              key={index}
              className="rounded-lg bg-white"
            >
              <h3 className="text-md font-semibold mb-2">
                {sec.category?.toUpperCase() || "Untitled Section"}
              </h3>

              {/* If inputs is missing or empty */}
              {!sec.inputs || Object.keys(sec.inputs).length === 0 ? (
                null
              ) : (
                <div className=" text-gray-800">

                  <div className="flex gap-2">
                    {/* Title */}
                    {sec.inputs["Certificate Name"] && (
                      <p className="text-md uppercase font-semibold">{sec.inputs["Certificate Name"]}</p>
                    )}

                    {/* Link */}
                    {sec.inputs["Certificate URL"] && (
                      <p>
                        <a
                          href={sec.inputs["Certificate URL"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm underline hover:text-blue-800"
                          >
                          LINK
                        </a>
                      </p>
                    )}
                  </div>

                    {/* Organization + Duration */}
                    {(sec.inputs["Issued By"] || sec.inputs["Issue Date"] || sec.inputs["End Date"]) && (
                      <p className="text-gray-700">
                        {sec.inputs["Issued By"] || ""}{" "}
                        {(sec.inputs["Issue Date"] || sec.inputs["End Date"]) &&
                          `– (${sec.inputs["Issue Date"] || ""})`}
                      </p>
                    )}
                  </div>
                )}

            </div>
          ))}
        </div>
  );
}
