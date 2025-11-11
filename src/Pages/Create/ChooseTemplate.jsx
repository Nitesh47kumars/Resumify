import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";

export default function ChooseTemplate() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formData.template) return alert("Please choose a template!");
    setCompletedStep(2);
    navigate("/create/education");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Choose a Template</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setFormData({ ...formData, template: "Modern" })}
          className={`px-6 py-3 rounded border ${
            formData.template === "Modern" ? "bg-blue-600 text-white" : ""
          }`}
        >
          Modern
        </button>
        <button
          onClick={() => setFormData({ ...formData, template: "Classic" })}
          className={`px-6 py-3 rounded border ${
            formData.template === "Classic" ? "bg-blue-600 text-white" : ""
          }`}
        >
          Classic
        </button>
      </div>

      <button
        onClick={handleNext}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
}
