import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import NextButton from "../../Buttons/NextButton";
import { useStep } from "../../Context/StepContext";
import PageHeader from "../../Buttons/PageHeader";
import { useNavigate } from "react-router-dom";

export default function AddComponent() {
  const { formData, addDynamicStep, removeDynamicStep } = useStep();

  const navigate = useNavigate();

  const savedSections = formData.extraComponents || [];
  const alreadyAdded = savedSections.map((sec) => sec.category);

  const categories = [
    { id: "hobbies", label: "Hobbies" },
    { id: "certificates", label: "Certificates" },
    { id: "languages", label: "Languages" },
    { id: "courses", label: "Courses" },
    { id: "custom", label: "Custom Build" },
  ];

  const courseTemplate = {
    "Course Name": "",
    Institution: "",
    "Completion Year": "",
    "Link (Optional)": "",
  };

  const fields = {
    hobbies: ["Hobby Name"],
    certificates: [
      "Certificate Name",
      "Issued By",
      "Issue Date",
      "Certificate URL",
    ],
    languages: ["Language Name", "Proficiency"],
    custom: ["Name", "Link", "Description"],
    courses: Object.keys(courseTemplate),
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [list, setList] = useState([]);
  const [courses, setCourses] = useState([{ ...courseTemplate }]);
  const [customTitle, setCustomTitle] = useState("");

  const startCategory = (id) => {
    setSelectedCategory(id);

    if (id === "courses") {
      setCourses([{ ...courseTemplate }]);
      return;
    }

    if (id === "custom") setCustomTitle("");

    const empty = {};
    fields[id].forEach((f) => (empty[f] = ""));
    setList([empty]);
  };

  const addEntry = () => {
    const empty = {};
    fields[selectedCategory].forEach((f) => (empty[f] = ""));
    setList([...list, empty]);
  };

  const updateEntry = (index, field, value) => {
    const updated = [...list];
    updated[index][field] = value;
    setList(updated);
  };

  const deleteEntry = (index) => {
    const updated = [...list];
    updated.splice(index, 1);
    setList(updated);
  };

  const updateCourseField = (index, field, value) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const addCourse = () => {
    setCourses([...courses, { ...courseTemplate }]);
  };

  const deleteCourse = (index) => {
    const updated = [...courses];
    updated.splice(index, 1);
    setCourses(updated);
  };

  const saveComponent = () => {
    if (!selectedCategory) return;

    if (selectedCategory === "courses") {
      addDynamicStep("courses", courses);
    } else if (selectedCategory === "custom") {
      addDynamicStep("custom", list, customTitle);
    } else {
      addDynamicStep(selectedCategory, list);
    }

    setSelectedCategory("");
    setList([]);
    setCourses([{ ...courseTemplate }]);
    setCustomTitle("");
  };

  const deleteSaved = (category) => {
    removeDynamicStep(category);
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto space-y-5">
        <PageHeader
          header="Add Components"
          onBack={() => {
            if (selectedCategory) {
              setSelectedCategory("");
              return;
            } else {
              navigate("/create/experience");
            }
          }}
        />

        {!selectedCategory && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Choose Component</h2>

            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => {
                const disabled = alreadyAdded.includes(cat.id);

                return (
                  <div key={cat.id} className="relative">
                    <button
                      onClick={() => !disabled && startCategory(cat.id)}
                      disabled={disabled}
                      className={`w-full p-4 border rounded-xl shadow font-medium transition 
                      ${
                        disabled
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "hover:bg-blue-50 cursor-pointer"
                      }`}
                    >
                      {cat.label}
                    </button>

                    {disabled && (
                      <button
                        onClick={() => deleteSaved(cat.id)}
                        className="absolute top-2 right-2 text-red-600 font-bold text-sm"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {selectedCategory && selectedCategory !== "courses" && (
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-800">
              Enter {categories.find((c) => c.id === selectedCategory)?.label}
            </h2>

            {selectedCategory === "custom" && (
              <input
                type="text"
                placeholder="Custom Title (e.g. Awards)"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="w-full p-2 border rounded"
              />
            )}

            {list.map((entry, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg space-y-3 relative pt-10"
              >
                {fields[selectedCategory].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    value={entry[field]}
                    onChange={(e) =>
                      updateEntry(index, field, e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                ))}

                <button
                  onClick={() => deleteEntry(index)}
                  className="absolute top-2 right-2 text-red-600 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={addEntry}
              className="w-full p-2 bg-gray-200 rounded"
            >
              + Add Another
            </button>

            <button
              onClick={saveComponent}
              className="w-full p-3 bg-blue-600 text-white rounded-lg"
            >
              Save Component
            </button>
          </div>
        )}

        {selectedCategory === "courses" && (
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-800">Enter Courses</h2>

            {courses.map((course, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg relative space-y-2"
              >
                {Object.keys(courseTemplate).map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    value={course[field]}
                    onChange={(e) =>
                      updateCourseField(index, field, e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                ))}

                <button
                  onClick={() => deleteCourse(index)}
                  className="absolute top-2 right-2 text-red-600 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={addCourse}
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

        {!selectedCategory && (
          <NextButton
            nextRoute="/create/finalize"
            stepNumber={7}
          />
        )}
      </div>
    </CreateLayout>
  );
}
