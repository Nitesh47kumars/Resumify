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
  const alreadyAdded = savedSections.map((s) => s.category);

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

  const requiredFields = {
    hobbies: ["Hobby Name"],
    certificates: ["Certificate Name", "Issued By", "Issue Date"],
    languages: ["Language Name", "Proficiency"],
    custom: ["Name", "Description"],
    courses: ["Course Name", "Institution", "Completion Year"],
  };

  const allFields = {
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
  const [errors, setErrors] = useState({});

  const startCategory = (id) => {
    setSelectedCategory(id);
    setErrors({});

    if (id === "courses") {
      setCourses([{ ...courseTemplate }]);
      return;
    }

    if (id === "custom") setCustomTitle("");

    const empty = {};
    allFields[id].forEach((f) => (empty[f] = ""));
    setList([empty]);
  };

  const addEntry = () => {
    const empty = {};
    allFields[selectedCategory].forEach((f) => (empty[f] = ""));
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

  const validate = () => {
    let newErrors = {};

    if (selectedCategory === "custom" && !customTitle.trim()) {
      newErrors["customTitle"] = "This field is required.";
    }

    if (selectedCategory === "courses") {
      courses.forEach((course, i) => {
        requiredFields.courses.forEach((field) => {
          if (!course[field]?.trim()) {
            newErrors[`courses-${i}-${field}`] = "This field is required.";
          }
        });
      });
      return newErrors;
    }

    list.forEach((entry, i) => {
      requiredFields[selectedCategory].forEach((field) => {
        if (!entry[field]?.trim()) {
          newErrors[`${selectedCategory}-${i}-${field}`] =
            "This field is required.";
        }
      });
    });

    return newErrors;
  };

  const saveComponent = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

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
    setErrors({});
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
            }
            navigate("/create/experience");
          }}
        />

        {!selectedCategory && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Choose Component</h2>

            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => (
                <div key={cat.id} className="relative">
                  <button
                    onClick={() => !alreadyAdded.includes(cat.id) && startCategory(cat.id)}
                    disabled={alreadyAdded.includes(cat.id)}
                    className={`w-full p-4 border rounded-xl shadow font-medium transition ${
                      alreadyAdded.includes(cat.id)
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "hover:bg-blue-50"
                    }`}
                  >
                    {cat.label}
                  </button>

                  {alreadyAdded.includes(cat.id) && (
                    <button
                      onClick={() => deleteSaved(cat.id)}
                      className="absolute top-2 right-2 text-red-600 font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory && selectedCategory !== "courses" && (
          <div className="space-y-4">
            <h2 className="font-semibold">
              Enter {categories.find((c) => c.id === selectedCategory)?.label}
            </h2>

            {selectedCategory === "custom" && (
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Custom Title (e.g. Awards)"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className={`w-full p-2 border rounded ${
                    errors.customTitle ? "border-red-500" : ""
                  }`}
                />
                {errors.customTitle && (
                  <p className="text-red-500 text-xs">This field is required.</p>
                )}
              </div>
            )}

            {list.map((entry, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg space-y-3 relative pt-10"
              >
                {allFields[selectedCategory].map((field) => {
                  const errKey = `${selectedCategory}-${index}-${field}`;
                  const isRequired = requiredFields[selectedCategory].includes(field);

                  return (
                    <div key={field} className="space-y-1">
                      <input
                        type="text"
                        placeholder={field}
                        value={entry[field]}
                        onChange={(e) =>
                          updateEntry(index, field, e.target.value)
                        }
                        className={`w-full p-2 border rounded ${
                          errors[errKey] ? "border-red-500" : ""
                        }`}
                      />
                      {errors[errKey] && (
                        <p className="text-red-500 text-xs">
                          This field is required.
                        </p>
                      )}
                    </div>
                  );
                })}

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
            <h2 className="font-semibold">Enter Courses</h2>

            {courses.map((course, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg space-y-2 relative"
              >
                {Object.keys(courseTemplate).map((field) => {
                  const errKey = `courses-${index}-${field}`;
                  const isRequired = requiredFields.courses.includes(field);

                  return (
                    <div key={field} className="space-y-1">
                      <input
                        type="text"
                        placeholder={field}
                        value={course[field]}
                        onChange={(e) =>
                          updateCourseField(index, field, e.target.value)
                        }
                        className={`w-full p-2 border rounded ${
                          errors[errKey] ? "border-red-500" : ""
                        }`}
                      />

                      {errors[errKey] && (
                        <p className="text-red-500 text-xs">
                          This field is required.
                        </p>
                      )}
                    </div>
                  );
                })}

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
          <NextButton nextRoute="/create/finalize" stepNumber={7} />
        )}
      </div>
    </CreateLayout>
  );
}
