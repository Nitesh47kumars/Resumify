import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateLayout from "../Create/CreateLayout";

export default function Education() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const [edu, setEdu] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!edu.trim()) return alert("Enter your education details");
    setFormData({ ...formData, education: [...formData.education, edu] });
    setCompletedStep(3);
    navigate("/create/summary");
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Education</h1>
        <input
          type="text"
          placeholder="e.g. BCA - XYZ University"
          value={edu}
          onChange={(e) => setEdu(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </CreateLayout>
  );
}
