import React from "react";
import { useLocation } from "react-router-dom";
import { useStep } from "../../Context/StepContext";

export default function CreateLayout({ children }) {
  const { completedStep } = useStep();
  const location = useLocation();

  const steps = [
    { id: 1, label: "Header", path: "/create/header" },
    { id: 2, label: "Education", path: "/create/education" },
    { id: 3, label: "Summary", path: "/create/summary" },
    { id: 4, label: "Experience", path: "/create/experience" },
    { id: 5, label: "Finalize", path: "/create/finalize" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">

      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Resume Builder</h2>

        <nav className="space-y-4">
          {steps.map((step, index) => {
            const isActive = location.pathname === step.path;
            const isCompleted = completedStep >= step.id;

            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold border ${
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
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">{children}</main>

      <aside className="hidden lg:block w-104 border-l border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold mb-4">Resume Preview</h3>
        <div className="w-full h-[85vh] border rounded-lg shadow-inner flex items-center justify-center text-gray-400">
          <p>Live Preview Coming Soon...</p>
        </div>
      </aside>
      
    </div>
  );
}
