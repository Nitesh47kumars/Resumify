import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import GoBack from "../../Buttons/GoBack";

export default function Education() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const navigate = useNavigate();

  const [entries, setEntries] = useState(
    formData.education?.length
      ? formData.education
      : [
          {
            degree: "",
            field: "",
            school: "",
            gradYear: "",
            currentYear: "",
            showOptional: true,
          },
        ]
  );

  const [errors, setErrors] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);

    const updatedErrors = [...errors];
    if (updatedErrors[index]) updatedErrors[index][field] = false;
    setErrors(updatedErrors);
  };

  const toggleOptional = (index) => {
    const updated = [...entries];
    updated[index].showOptional = !updated[index].showOptional;

    // Clear values if turning OFF
    if (!updated[index].showOptional) {
      updated[index].gradYear = "";
      updated[index].currentYear = "";
    }

    setEntries(updated);
  };

  const addEntry = () => {
    setEntries([
      ...entries,
      {
        degree: "",
        field: "",
        school: "",
        gradYear: "",
        currentYear: "",
        showOptional: true,
      },
    ]);

    setErrors([
      ...errors,
      { degree: false, field: false, school: false }
    ]);
  };

  const deleteEntry = (index) => {
    if (entries.length === 1) return;

    setEntries(entries.filter((_, i) => i !== index));
    setErrors(errors.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors = entries.map((item) => ({
      degree: !item.degree.trim(),
      field: !item.field.trim(),
      school: !item.school.trim(),
    }));

    setErrors(newErrors);

    return newErrors.every(
      (err) => !err.degree && !err.field && !err.school
    );
  };

  const handleNext = () => {
    if (!validate()) return;

    setFormData({ ...formData, education: entries });
    setCompletedStep(3);
    navigate("/create/summary");
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Education</h1>

        {entries.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 shadow-sm mb-6 relative"
          >
            <h2 className="text-xl font-semibold mb-3">
              Education Entry {index + 1}
            </h2>

            {entries.length > 1 && (
              <button
                onClick={() => deleteEntry(index)}
                className="absolute top-4 right-4 text-red-500 font-semibold"
              >
                ✕
              </button>
            )}

            {/* Degree */}
            <div className="mb-3">
              <input
                type="text"
                value={item.degree}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
                placeholder="Degree (e.g. Bachelor of Computer Applications)"
                className={`w-full p-3 border rounded ${
                  errors[index]?.degree ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>

            {/* Field */}
            <div className="mb-3">
              <input
                type="text"
                value={item.field}
                onChange={(e) => handleChange(index, "field", e.target.value)}
                placeholder="Field of Study"
                className={`w-full p-3 border rounded ${
                  errors[index]?.field ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>

            {/* School */}
            <div className="mb-3">
              <input
                type="text"
                value={item.school}
                onChange={(e) => handleChange(index, "school", e.target.value)}
                placeholder="College / University"
                className={`w-full p-3 border rounded ${
                  errors[index]?.school ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>

            {/* Toggle Optional */}
            <div className="flex items-center gap-2 mb-3">
              <label className="text-sm font-medium">
                Are you Currently in Studying
              </label>

              <button
                onClick={() => toggleOptional(index)}
                className={`px-3 py-1 text-sm rounded-full ${
                  item.showOptional ? "bg-blue-600 text-white" : "bg-gray-300"
                }`}
              >
                {item.showOptional ? "ON" : "OFF"}
              </button>
            </div>

            {/* Optional Fields */}
            {item.showOptional && (
              <>
                {/* Expected Graduation */}
                <div className="mb-3">
                  <input
                    type="text"
                    value={item.gradYear}
                    onChange={(e) =>
                      handleChange(index, "gradYear", e.target.value)
                    }
                    placeholder="Expected Graduation (e.g. July 2027)"
                    className="w-full p-3 border rounded border-gray-300"
                  />
                </div>

                {/* Current Year */}
                <div className="mb-3">
                  <input
                    type="text"
                    value={item.currentYear}
                    onChange={(e) =>
                      handleChange(index, "currentYear", e.target.value)
                    }
                    placeholder="Current Year (e.g. 2nd Year - 3rd Semester)"
                    className="w-full p-3 border rounded border-gray-300"
                  />
                </div>
              </>
            )}
          </div>
        ))}

        <button
          onClick={addEntry}
          className="w-full bg-gray-200 py-3 rounded mb-6 font-medium hover:bg-gray-300"
        >
          + Add Another Education
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full"
        >
          Next
        </button>

        <GoBack data="/create/header" />
      </div>
    </CreateLayout>
  );
}
