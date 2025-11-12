import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ResumeButton from "../../Components/ResumeButton";

export default function Education() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const navigate = useNavigate();

  const [edu, setEdu] = useState("");
  const [error, setError] = useState("");
  const [educationList, setEducationList] = useState(formData.education || []);

  const handleAdd = () => {
    if (!edu.trim()) {
      setError("Please enter your education details before adding.");
      return;
    }
    const updatedList = [...educationList, edu];
    setEducationList(updatedList);
    setFormData({ ...formData, education: updatedList });
    setEdu("");
    setError("");
  };

  const handleRemove = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
    setFormData({ ...formData, education: updatedList });
  };

  const handleNext = () => {
    if (educationList.length === 0) {
      setError("⚠️ Please add at least one education entry before continuing.");
      return;
    }
    setCompletedStep(3);
    navigate("/create/skills");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          Education Details
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Add your education history — you can include multiple degrees or
          certifications.
        </p>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-6">
          <input
            type="text"
            placeholder="e.g. BCA - XYZ University (2022 - 2025)"
            value={edu}
            onChange={(e) => setEdu(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Add
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-600 font-medium mb-4 animate-pulse">
            {error}
          </div>
        )}

        {/* Education List */}
        <div className="space-y-3 mb-10">
          {educationList.length > 0 ? (
            educationList.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <span className="text-gray-800">{item}</span>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No education details added yet.
            </p>
          )}
        </div>

        {/* Next Button */}
        <ResumeButton onClick={handleNext} data="Next Step →" />
      </div>
    </div>
  );
}
