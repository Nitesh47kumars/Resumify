import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateLayout from "../../Layout/CreateLayout";

// Convert date into: Jan 2024
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
};

export default function Experience() {
  const { formData, setFormData, setCompletedStep } = useStep();
  const navigate = useNavigate();

  const [experience, setExperience] = useState(
    formData.experience?.length
      ? formData.experience
      : [
          {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ]
  );

  const today = new Date().toISOString().split("T")[0];

  const convertToPreviewFormat = () => {
    return experience.map((exp) => ({
      role: exp.position || "",
      company: exp.company || "",
      duration:
        exp.startDate || exp.endDate
          ? `${formatDate(exp.startDate) || ""} — ${
              formatDate(exp.endDate) || "Present"
            }`
          : "",
      details: exp.description
        ? exp.description.split("\n").filter((line) => line.trim() !== "")
        : [],
    }));
  };

  const handleChange = (idx, field, value) => {
    const updated = [...experience];
    updated[idx][field] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = experience.filter((_, i) => i !== index);
    setExperience(updated.length ? updated : []);
  };

  const handleNext = () => {
    const converted = convertToPreviewFormat();
    setFormData({ ...formData, experience: converted });
    setCompletedStep("experience");
    navigate("/create/addcomponent");
  };

  const skipExperience = () => {
    setFormData({ ...formData, experience: [] });
    setCompletedStep("experience");
    navigate("/create/addcomponent");
  };

  useEffect(() => {
    const converted = convertToPreviewFormat();
    setFormData({ ...formData, experience: converted });
  }, [experience]);

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>

        {/* SKIP BOX */}
        <div className="mb-6 p-4 border rounded-lg bg-gray-50 flex justify-between items-center">
          <p className="text-sm text-gray-700">Don’t have any experience yet?</p>
          <button
            onClick={skipExperience}
            className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg"
          >
            Skip
          </button>
        </div>

        {/* EXPERIENCE INPUT FIELDS */}
        {experience.map((exp, index) => (
          <div key={index} className="mb-6 border p-4 rounded-lg bg-white shadow-sm">

            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Experience {index + 1}</h3>
              {experience.length > 1 && (
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              )}
            </div>

            <input
              type="text"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />

            <input
              type="text"
              placeholder="Role / Position"
              value={exp.position}
              onChange={(e) => handleChange(index, "position", e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />

            {/* DATE PICKERS */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-600">Start Date</label>
                <input
                  type="date"
                  max={today}
                  value={exp.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="text-xs text-gray-600">End Date</label>
                <input
                  type="date"
                  max={today}
                  min={exp.startDate || ""}
                  value={exp.endDate}
                  onChange={(e) => handleChange(index, "endDate", e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <textarea
              placeholder="Describe your work (each line becomes a bullet point)"
              value={exp.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="w-full mt-2 p-2 border rounded h-32 resize-none"
            />
          </div>
        ))}

        <button
          onClick={addExperience}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Add Another Experience
        </button>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNext}
            className="px-5 py-2 bg-green-600 text-white rounded-lg"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </CreateLayout>
  );
}
