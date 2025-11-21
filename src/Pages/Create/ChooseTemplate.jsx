import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ResumeButton from "../../Buttons/ResumeButton";

export default function ChooseTemplate() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(formData.template || "");
  const [error, setError] = useState("");

  const templates = [
    { id: "template1", name: "Modern", image: "/template1.jpg" },
    { id: "template2", name: "Classic", image: "/template2.jpg" },
    { id: "template3", name: "Minimal", image: "/template3.jpeg" },
    { id: "template4", name: "Creative", image: "/template4.png" },
  ];

  const handleSelect = (id) => {
    setSelected(id);
    setError("");
    setFormData({ ...formData, template: id });
  };

  const handleNext = () => {
    if (!selected) {
      setError("⚠️ Please select a resume template before continuing.");
      return;
    }
    setCompletedStep(1);
    navigate("/create/header");
  };
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          Choose Your Resume Template
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Pick a template that matches your personality and profession — you can
          fully customize it later.
        </p>

        {/* Template Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`border-4 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition duration-200 hover:scale-105 hover:shadow-lg ${
                selected === template.id
                  ? "border-indigo-600 shadow-indigo-300 shadow-lg"
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

        {error && (
          <div className="text-center mt-6 text-red-600 font-medium animate-pulse">
            {error}
          </div>
        )}

        <ResumeButton onClick={handleNext} data="Next Step →" />
      </div>
    </div>
  );
}
