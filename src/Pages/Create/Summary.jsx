import { useStep } from "../../Context/StepContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateLayout from "../../Layout/CreateLayout";

export default function Summary() {
  const { formData, setFormData, setCompletedStep } = useStep();
  const [summary, setSummary] = useState(formData.summary || "");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!summary.trim())
      return alert("Please enter your professional summary.");

    setFormData({ ...formData, summary });
    setCompletedStep(4);
    navigate("/create/skills");
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Professional Summary
        </h1>

        <p className="text-gray-600 mb-4">
          Write a short 2–3 line summary describing your strengths,
          experience, and what you bring to the role.
        </p>

        <textarea
          className="w-full h-40 p-4 border rounded-lg shadow-sm bg-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Example: Motivated BCA student with strong frontend skills in React, JavaScript, and UI design..."
          value={summary}
          onChange={(e) => {
            const value = e.target.value;
            setSummary(value);
            setFormData({ ...formData, summary: value });
          }}          
        ></textarea>

        <button
          onClick={handleNext}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow"
        >
          Next
        </button>
      </div>
    </CreateLayout>
  );
}
