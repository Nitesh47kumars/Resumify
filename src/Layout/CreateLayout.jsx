import React from "react";
import ResumePreview from "./ResumePreview";
import StepTracker from "../Layout/StepTracker";

export default function CreateLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">

     <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6 flex flex-col">
        <StepTracker />
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>

      <aside className="hidden lg:block w-104 border-l border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold mb-4">Resume Preview</h3>
        <div className="w-full h-[85vh] border rounded-lg shadow-inner p-4 bg-white">
          <ResumePreview />
        </div>
      </aside>

    </div>
  );
}
