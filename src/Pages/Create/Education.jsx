import { useStep } from "../../Context/StepContext"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import GoBack from "../../Components/GoBack";

export default function Education() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const navigate = useNavigate();

  const [entries, setEntries] = useState(
    formData.education?.length
      ? formData.education
      : [{ degree: "", school: "", year: "" }]
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

  const addEntry = () => {
    setEntries([...entries, { degree: "", school: "", year: "" }]);
    setErrors([...errors, { degree: false, school: false, year: false }]);
  };

  const deleteEntry = (index) => {
    if (entries.length === 1) return; // do not remove last entry

    const updatedEntries = entries.filter((_, i) => i !== index);
    const updatedErrors = errors.filter((_, i) => i !== index);

    setEntries(updatedEntries);
    setErrors(updatedErrors);
  };

  const validate = () => {
    const newErrors = entries.map((item) => ({
      degree: !item.degree.trim(),
      school: !item.school.trim(),
      year: !item.year.trim(),
    }));

    setErrors(newErrors);

    return newErrors.every((err) => !err.degree && !err.school && !err.year);
  };

  const handleNext = () => {
    if (!validate()) return;

    setFormData({
      ...formData,
      education: entries,
    });

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
                placeholder="Degree (e.g. BCA)"
                className={`w-full p-3 border rounded ${
                  errors[index]?.degree ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[index]?.degree && (
                <p className="text-red-500 text-sm mt-1">
                  Degree is required
                </p>
              )}
            </div>

            {/* School */}
            <div className="mb-3">
              <input
                type="text"
                value={item.school}
                onChange={(e) => handleChange(index, "school", e.target.value)}
                placeholder= "College / University"
                className={`w-full p-3 border rounded ${
                  errors[index]?.school ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[index]?.school && (
                <p className="text-red-500 text-sm mt-1">
                  College/University name is required
                </p>
              )}
            </div>

            {/* Year */}
            <div>
              <input
                type="text"
                value={item.year}
                onChange={(e) => handleChange(index, "year", e.target.value)}
                placeholder="Year (e.g. 2022 - Present)"
                className={`w-full p-3 border rounded ${
                  errors[index]?.year ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[index]?.year && (
                <p className="text-red-500 text-sm mt-1">
                  Year is required
                </p>
              )}
            </div>
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
