import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";

export default function AddComponent() {
  const categories = [
    "Projects",
    "Social Media / Profiles",
    "Certificates",
  ];

  const fieldsByCategory = {
    Projects: ["Project Name", "Description", "Tech Stack", "Link"],
    "Social Media / Profiles": ["Platform", "Username", "Profile URL"],
    Certificates: ["Certificate Name", "Issued By", "Issue Date", "Certificate URL"],
  };

  const [category, setCategory] = useState("");
  const [inputs, setInputs] = useState({});

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Saved Data:", { category, inputs });
  };

  return (
    <CreateLayout>
      <div className="p-4 space-y-4 w-full mx-auto bg-white rounded-2xl shadow">
        <h2 className="text-xl font-semibold">Add Component</h2>

        <div className="space-y-2">
          <label className="font-medium">Choose Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
            >
            <option value="">Select...</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {category && (
          <div className="space-y-3">
            <h3 className="font-medium">Enter {category} Details</h3>
            {fieldsByCategory[category].map((field) => (
              <input
              key={field}
              type="text"
              placeholder={field}
              value={inputs[field] || ""}
              onChange={(e) => handleInputChange(field, e.target.value)}
              className="w-full p-2 border rounded"
              />
            ))}
          </div>
        )}

        {category && (
          <button
          onClick={handleSubmit}
          className="w-full p-2 bg-blue-600 text-white rounded-lg"
          >
            Save
          </button>
        )}
      </div>
    </CreateLayout>
  );
}