import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ChooseTemplate() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(formData.template || "");

  const templates = [
    {
      id: "modern",
      name: "Modern",
      image:
        "https://cdn.pixabay.com/photo/2020/05/15/19/38/resume-5179069_1280.jpg",
    },
    {
      id: "classic",
      name: "Classic",
      image:
        "https://cdn.pixabay.com/photo/2015/11/19/21/11/resume-1053746_1280.jpg",
    },
    {
      id: "minimal",
      name: "Minimal",
      image:
        "https://cdn.pixabay.com/photo/2020/09/02/20/46/resume-template-5537587_1280.png",
    },
    {
      id: "creative",
      name: "Creative",
      image:
        "https://cdn.pixabay.com/photo/2020/03/09/17/59/cv-4910293_1280.jpg",
    },
  ];

  const handleSelect = (id) => {
    setSelected(id);
    setFormData({ ...formData, template: id });
  };

  const handleNext = () => {
    if (!selected) return alert("Please choose a template first!");
    setCompletedStep(2);
    navigate("/create/education");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          Choose Your Resume Template
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Select a template style that matches your personality and profession.
          You can customize it later.
        </p>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`border-4 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition duration-200 hover:scale-105 hover:shadow-lg ${
                selected === template.id
                  ? "border-indigo-600"
                  : "border-transparent"
              }`}
              onClick={() => handleSelect(template.id)}
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="font-semibold text-lg text-gray-800">
                  {template.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleNext}
            className="px-10 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
}
