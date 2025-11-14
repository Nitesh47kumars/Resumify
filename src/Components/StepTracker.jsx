import { useStep } from "../Context/StepContext";
import { useNavigate } from "react-router-dom";

const steps = [
  { id: 1, label: "Header", path: "/create/header" },
  { id: 2, label: "Education", path: "/create/education" },
  { id: 3, label: "Summary", path: "/create/summary" },
  { id: 4, label: "Experience", path: "/create/experience" },
  { id: 5, label: "Add Other", path: "/create/add-other" },
  { id: 6, label: "Finalize", path: "/create/finalize" },
];

export default function StepTracker() {
  const { completedStep } = useStep();
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-white shadow-xl rounded-xl p-6 border-r h-full flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">Your Progress</h2>
      <ul className="space-y-3">
        {steps.map((step) => (
          <li
            key={step.id}
            onClick={() =>
              step.id <= completedStep ? navigate(step.path) : null
            }
            className={`cursor-pointer p-2 rounded-md transition ${
              step.id <= completedStep
                ? "text-indigo-600 font-semibold hover:bg-indigo-50"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            <span
              className={`inline-block w-3 h-3 rounded-full mr-2 ${
                step.id <= completedStep
                  ? "bg-indigo-600"
                  : "bg-gray-300"
              }`}
            ></span>
            {step.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
