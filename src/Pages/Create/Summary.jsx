import { useStep } from "../../Context/StepContext";
import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import NextButton from "../../Buttons/NextButton";
import PageHeader from "../../Buttons/PageHeader";

export default function Summary() {
  const { formData, setFormData } = useStep();
  const [summary, setSummary] = useState(formData.summary || "");
  const [error, setError] = useState("");

  const handleValidate = () => {
    if (!summary.trim()) {
      setError("Summary cannot be empty.");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        <PageHeader header="Professional Summary" />

        <p className="text-gray-600 mb-4">
          Write a short 2–3 line summary describing your strengths,
          experience, and what you bring to the role.
        </p>

        <textarea
          className={`w-full h-80 p-4 border rounded-lg shadow-sm bg-white resize-none
            focus:outline-none focus:ring-2 
            ${error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}
          `}
          placeholder="Example: Motivated BCA student with strong frontend skills..."
          value={summary}
          onChange={(e) => {
            const value = e.target.value;
            setSummary(value);
            setFormData({ ...formData, summary: value });
            if (value.trim()) setError("");
          }}
        ></textarea>

        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

        {/* Buttons */}
        <div className="flex justify-end items-center mt-4 gap-4">

          <NextButton
            nextRoute="/create/skills"
            stepNumber={3}
            validate={handleValidate}
          />
        </div>
      </div>
    </CreateLayout>
  );
}
