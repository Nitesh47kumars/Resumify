import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import GoBack from "../../Components/GoBack";

export default function Skills() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const [skillInput, setSkillInput] = useState("");
  const navigate = useNavigate();

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;

    const updated = [...formData.skills, trimmed];
    setFormData({ ...formData, skills: updated });
    setSkillInput("");
  };

  const removeSkill = (index) => {
    const updated = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updated });
  };

  const clearAll = () => {
    if (formData.skills.length === 0) return;
    setFormData({ ...formData, skills: [] });
  };

  const handleNext = () => {
    if (formData.skills.length === 0)
      return alert("Please enter at least one skill");

    setCompletedStep(5);
    navigate("/create/experience");
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Skills</h1>

        <p className="text-gray-600 mb-4">
          Add your technical and soft skills. Press <strong>Enter</strong> after each skill.
        </p>

        {/* Input + Add */}
        <div className="flex gap-3 mb-5">
          <input
            type="text"
            placeholder="e.g. React.js, JavaScript, UI Design"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
            className="flex-1 p-3 border rounded-lg shadow-sm bg-white 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addSkill}
            className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow
                       hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Skills List */}
        <div className="flex flex-wrap gap-3 mb-6">
          {formData.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-100 text-blue-800 
                         px-4 py-2 rounded-full shadow-sm"
            >
              <span>{skill}</span>
              <button
                onClick={() => removeSkill(index)}
                className="text-blue-600 hover:text-red-600 font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Clear All + Next */}
        <div className="flex gap-4 mb-2">
          {formData.skills.length > 0 && (
            <button
              onClick={clearAll}
              className="flex-1 bg-red-500 text-white py-3 rounded-lg shadow
                         hover:bg-red-600"
            >
              Clear All
            </button>
          )}

          <button
            onClick={handleNext}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg shadow transition-all duration-300
                       hover:bg-green-700"
          >
            Next
          </button>
        </div>

        <GoBack data="/create/summary" />
      </div>
    </CreateLayout>
  );
}
