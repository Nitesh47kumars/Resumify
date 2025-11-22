import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import NextButton from "../../Buttons/NextButton";
import GoBack from "../../Buttons/GoBack";
import { useStep } from "../../Context/StepContext";

export default function AddComponent() {
  const { addDynamicStep } = useStep();

  const categories = [
    { id: "hobbies", label: "Hobbies" },
    { id: "certificates", label: "Certificates" },
    { id: "custom", label: "Custom Build" },
    { id: "languages", label: "Languages" },
    { id: "courses", label: "Courses" },
  ];

  const courseTemplate = {
    "Course Name": "",
    "Institution": "",
    "Completion Year": "",
    "Link (Optional)": ""
  };

  const fields = {
    hobbies: ["Hobby Name"],
    certificates: ["Certificate Name", "Issued By", "Issue Date", "Certificate URL"],
    custom: ["Title", "Name", "Dates", "Link", "Description"],
    languages: ["Language Name", "Proficiency"],
    courses: [...Object.keys(courseTemplate)],
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [inputs, setInputs] = useState({});
  const [courseList, setCourseList] = useState([ { ...courseTemplate } ]);

  const handleCourseChange = (index, field, value) => {
    const updated = [...courseList];
    updated[index][field] = value;
    setCourseList(updated);
  };

  const addCourseEntry = () => {
    setCourseList([...courseList, { ...courseTemplate }]);
  };

  const saveComponent = () => {
    if (selectedCategory === "courses") {
      addDynamicStep("courses", { list: courseList });
    } else {
      addDynamicStep(selectedCategory, inputs);
    }

    setInputs({});
    setCourseList([{ ...courseTemplate }]);
    setSelectedCategory("");
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto bg-white p-5 rounded-xl shadow space-y-5">
        <h1 className="text-3xl font-bold text-gray-900">
          Add Extra Components
        </h1>

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

        {selectedCategory === "courses" && (
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-800">Enter Courses</h2>

            {courseList.map((entry, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-bold mb-2">Course {index + 1}</h3>

                {Object.keys(courseTemplate).map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    value={entry[field]}
                    onChange={(e) => handleCourseChange(index, field, e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                  />
                ))}
              </div>
            ))}

            <button
              onClick={addCourseEntry}
              className="w-full p-2 bg-gray-200 rounded"
            >
              + Add Another Course
            </button>

            <button
              onClick={saveComponent}
              className="w-full p-3 bg-blue-600 text-white rounded-lg"
            >
              Save Component
            </button>
          </div>
        )}

        {selectedCategory &&
          selectedCategory !== "courses" && (
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
                  onChange={(e) =>
                    setInputs((prev) => ({ ...prev, [field]: e.target.value }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
              ))}

              <button
                onClick={saveComponent}
                className="w-full p-3 bg-blue-600 text-white rounded-lg"
              >
                Save Component
              </button>
            </div>
          )}

        <NextButton nextRoute="/create/finalize" stepNumber={7} />
        <GoBack data="/create/experience" />
      </div>
    </CreateLayout>
  );
}
