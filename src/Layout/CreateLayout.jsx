import React from "react";
import { useLocation } from "react-router-dom";
import { useStep } from "../Context/StepContext";
import ResumePreview from "../Components/ResumePreview";
import StepTracker from "../Layout/StepTracker";

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
    <aside className="w-64 bg-white flex flex-col">
      <StepTracker/>
    </aside>

      <main className="flex-1 p-10 overflow-y-auto">{children}</main>

      <aside className="hidden lg:block w-104 border-l border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold mb-4">Resume Preview</h3>
        <div className="w-full h-[85vh] border rounded-lg shadow-inner flex items-center justify-center text-gray-400">
          <ResumePreview/>
        </div>
      </aside>
      
    </div>
  );
}
