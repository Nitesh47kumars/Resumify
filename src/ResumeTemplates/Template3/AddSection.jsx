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
              <h3 className="text-lg font-bold mb-2">
                {sec.category?.toUpperCase() || "Untitled Section"}
              </h3>

              {!sec.inputs || Object.keys(sec.inputs).length === 0 ? (
                <p className="text-gray-400 italic">No items added</p>
              ) : (
                <ul className="list-disc ml-5 text-gray-700">
                  {Object.entries(sec.inputs).map(([key, value], i) => (
                    <li key={i}>
                      <strong>{key}:</strong> {value || "—"}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
  );
}
