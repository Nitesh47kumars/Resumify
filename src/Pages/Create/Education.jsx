import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Education() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const [edu, setEdu] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!edu.trim()) return alert("Enter your education details");
    setFormData({ ...formData, education: [...formData.education, edu] });
    setCompletedStep(3);
    navigate("/create/skills");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <input
        type="text"
        placeholder="e.g. BCA - XYZ University"
        value={edu}
        onChange={(e) => setEdu(e.target.value)}
        className="border p-2 rounded w-80 mb-4"
      />
      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
}
