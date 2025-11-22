import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStep } from "../Context/StepContext";

export default function StepTracker() {
  const { completedStep } = useStep();
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { id: 1, label: "Header", path: "/create/header" },
    { id: 2, label: "Summary", path: "/create/summary" },
    { id: 3, label: "Skills", path: "/create/skills" },
    { id: 4, label: "Education", path: "/create/education" },
    { id: 5, label: "Experience", path: "/create/experience" },
    { id: 6, label: "Add More", path: "/create/addcomponent" },
    { id: 7, label: "Finalize", path: "/create/finalize" },
  ];  

  return (
    <div className="flex flex-col h-full">

      <h2 className="text-2xl font-bold mb-8 text-gray-800">Resume Builder</h2>

      <nav className="space-y-4">
        {steps.map((step) => {
          const isActive = location.pathname === step.path;
          const isCompleted = completedStep >= step.id;

          return (
            <div
              key={step.id}
              onClick={() => isCompleted && navigate(step.path)}
              className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer
                ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : isCompleted
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-gray-400 cursor-not-allowed"
                }`}
            >
              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold border
                ${
                  isCompleted
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                {step.id}
              </span>

              {step.label}
            </div>
          );
        })}
      </nav>

    </div>
  );
}
