import { useStep } from "../../Context/StepContext";
import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import GoBack from "../../Buttons/GoBack";
import Toggle from "../../Buttons/Toggle";
import NextButton from "../../Buttons/NextButton";

export default function Education() {
  const {formData, setFormData } = useStep();

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

  const [errors, setErrors] = useState(
    entries.map(() => ({
      degree: "",
      field: "",
      school: "",
    }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);

    const updatedErrors = [...errors];
    updatedErrors[index][field] = "";
    setErrors(updatedErrors);
  };

  const toggleOptional = (index) => {
    const updated = [...entries];
    updated[index].showOptional = !updated[index].showOptional;

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
      { degree: "", field: "", school: "" }
    ]);
  };

  const deleteEntry = (index) => {
    if (entries.length === 1) return;

    setEntries(entries.filter((_, i) => i !== index));
    setErrors(errors.filter((_, i) => i !== index));
  };

  const validate = () =>
    entries.every((item, i) => {
      const newErr = {
        degree: item.degree.trim() ? "" : "Degree is required",
        field: item.field.trim()? "" : "Field of study is required",
        school: item.school.trim()? "" : "College / University name is required",
      };

      const updated = [...errors];
      updated[i] = newErr;
      setErrors(updated);

      return !newErr.degree && !newErr.field && !newErr.school;
    });

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Education</h1>

        {entries.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 shadow-sm mb-3 relative"
          >
            <h2 className="text-xl font-semibold mb-3">
              Education Entry {index + 1}
            </h2>

            {/* Delete */}
            {entries.length > 1 && (
              <button
                onClick={() => deleteEntry(index)}
                className="absolute top-4 right-4 text-red-500 font-semibold"
              >
                ✕
              </button>
            )}

            {/* DEGREE */}
            <div className="mb-3">
              <input
                type="text"
                value={item.degree}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
                placeholder="Degree"
                className={`w-full p-3 border rounded ${
                  errors[index]?.degree ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[index]?.degree && (
                <p className="text-red-500 text-sm mt-1">{errors[index].degree}</p>
              )}
            </div>

            {/* FIELD */}
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
              {errors[index]?.field && (
                <p className="text-red-500 text-sm mt-1">{errors[index].field}</p>
              )}
            </div>

            {/* COLLEGE */}
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
              {errors[index]?.school && (
                <p className="text-red-500 text-sm mt-1">{errors[index].school}</p>
              )}
            </div>

            {/* TOGGLE */}
            <div className="flex items-center gap-3 mb-3">
              <label className="text-sm font-medium">
                Are you currently studying?
              </label>
              <Toggle
                value={item.showOptional}
                onChange={() => toggleOptional(index)}
              />
            </div>

            {/* OPTIONAL FIELDS */}
            {item.showOptional && (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    value={item.gradYear}
                    onChange={(e) =>
                      handleChange(index, "gradYear", e.target.value)
                    }
                    placeholder="Expected Graduation"
                    className="w-full p-3 border rounded border-gray-300"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    value={item.currentYear}
                    onChange={(e) =>
                      handleChange(index, "currentYear", e.target.value)
                    }
                    placeholder="Current Year (optional)"
                    className="w-full p-3 border rounded border-gray-300"
                  />
                </div>
              </>
            )}
          </div>
        ))}

        <div className="flex justify-between mt-2 mb-2">
          <button
            onClick={addEntry}
            className="px-4 bg-gray-200 py-3 rounded font-medium hover:bg-gray-300"
          >
            + Add Another Education
          </button>

          <NextButton
            nextRoute="/create/summary"
            stepNumber={3}
            validate={() => {
              if (!validate()) return false;
              setFormData({ ...formData, education: entries });
              return true;
            }}
          />
        </div>

        <GoBack data="/create/header" />
      </div>
    </CreateLayout>
  );
}
