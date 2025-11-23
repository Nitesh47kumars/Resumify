import { useStep } from "../../Context/StepContext";
import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import NextButton from "../../Buttons/NextButton";
import PageHeader from "../../Buttons/PageHeader";

export default function Skills() {
  const { formData, setFormData } = useStep();
  const [skillInput, setSkillInput] = useState("");
  const [error, setError] = useState("");

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;

    const updated = [...formData.skills, trimmed];
    setFormData({ ...formData, skills: updated });
    setSkillInput("");
    setError("");
  };

  const removeSkill = (index) => {
    const updated = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updated });

    if (updated.length === 0) {
      setError("Please enter at least one skill.");
    }
  };

  const clearAll = () => {
    setFormData({ ...formData, skills: [] });
    setError("Please enter at least one skill.");
  };

  const validateSkills = () => {
    if (formData.skills.length === 0) {
      setError("Please enter at least one skill.");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        
        <PageHeader header="Skills"/>

        <p className="text-gray-600 mb-4">
          Add your technical and soft skills. Press <strong>Enter</strong> after each skill.
        </p>

        {/* Input + Add */}
        <div className="flex gap-3 mb-2">
          <input
            type="text"
            placeholder="e.g. React.js, JavaScript, UI Design"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
            className={`flex-1 p-3 border rounded-lg shadow-sm bg-white
              focus:outline-none focus:ring-2 
              ${error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}
            `}
          />

          <button
            onClick={addSkill}
            className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {error && (
          <p className="text-sm text-red-600 mb-3">{error}</p>
        )}

        {/* Skills List */}
        <div className="flex flex-wrap gap-3 mb-4">
          {formData.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full shadow-sm"
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
        <div className="flex justify-between items-center gap-4 mb-2">
          {formData.skills.length > 0 ? (
            <button
              onClick={clearAll}
              className="px-4 bg-red-500 text-white py-3 rounded-lg shadow hover:bg-red-600"
            >
              Clear All
            </button>
          ) : (
            <div className="w-[100px]"></div>
          )}

          <NextButton
            nextRoute="/create/education"
            stepNumber={4}
            validate={validateSkills}
          />
        </div>
      </div>
    </CreateLayout>
  );
}
