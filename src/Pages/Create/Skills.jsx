import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Skills() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!skill.trim()) return alert("Enter at least one skill");
    setFormData({ ...formData, skills: [...formData.skills, skill] });
    setCompletedStep(4);
    navigate("/create/summary");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <input
        type="text"
        placeholder="e.g. React.js, Node.js"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
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
