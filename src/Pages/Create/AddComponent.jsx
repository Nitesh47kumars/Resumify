import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import NextButton from "../../Buttons/NextButton";
import GoBack from "../../Buttons/GoBack";
import { useStep } from "../../Context/StepContext";

export default function AddComponent() {
  const { formData, setFormData, addDynamicStep } = useStep();

  const categories = [
    { id: "hobbies", label: "Hobbies" },
    { id: "certificates", label: "Certificates" },
    { id: "custom", label: "Custom Build" },
    { id: "languages", label: "Languages" },
    { id: "courses", label: "Courses" },
  ];

  const fields = {
    hobbies: ["Hobby Name"],

    certificates: [
      "Certificate Name",
      "Issued By",
      "Issue Date",
      "Certificate URL",
    ],

    custom: [
      "Title",
      "Name",
      "Dates",
      "Link",
      "Description",
    ],

    languages: ["Language Name", "Proficiency"],

    courses: ["Course Name", "Institution", "Completion Year"],
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [inputs, setInputs] = useState({});

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const saveComponent = () => {
    const data = {
      category: selectedCategory,
      inputs,
    };

    // Save inside global formData
    setFormData((prev) => ({
      ...prev,
      extraComponents: [...prev.extraComponents, data],
    }));

    // Add dynamic step inside Step Tracker
    addDynamicStep(selectedCategory);

    // Reset
    setInputs({});
    setSelectedCategory("");
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto bg-white p-5 rounded-xl shadow space-y-5">

        <h1 className="text-3xl font-bold text-gray-900">Add Extra Components</h1>

        {/* Main Category Selection */}
        {!selectedCategory && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Choose Component</h2>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="p-4 border rounded-xl shadow hover:bg-blue-50 font-medium"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Fields */}
        {selectedCategory && (
          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800">
              Enter {categories.find((c) => c.id === selectedCategory)?.label} Details
            </h2>

            {fields[selectedCategory].map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field}
                value={inputs[field] || ""}
                onChange={(e) => handleInputChange(field, e.target.value)}
                className="w-full p-3 border rounded-lg"
              />
            ))}

            <button
              onClick={saveComponent}
              className="w-full p-3 bg-blue-600 text-white rounded-lg mt-2"
            >
              Save Component
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <NextButton nextRoute="/create/finalize" stepNumber={7} />
        <GoBack data="/create/experience" />
      </div>
    </CreateLayout>
  );
}
