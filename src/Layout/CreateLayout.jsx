import { useState } from "react";
import ResumePreview from "./ResumePreview";
import StepTracker from "./StepTracker";
import { Menu } from "lucide-react";

const CreateLayout = ({ children, resumeRef }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden bg-gray-100 shadow-2xl">

      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <h2 className="text-xl font-semibold">Resume Builder</h2>

        <button onClick={() => setOpenMenu(true)}>
          <Menu size={28} />
        </button>
      </div>

      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <div
            className="absolute left-0 top-0 w-64 h-full bg-white shadow-lg p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-4 text-gray-700 font-semibold"
              onClick={() => setOpenMenu(false)}
            >
              Close ✕
            </button>

            <StepTracker />
          </div>
        </div>
      )}

      <div className="hidden md:flex w-full h-full">
        <div className="w-[15%] bg-white shadow-md p-5">
          <StepTracker />
        </div>

        <div className="w-[50%] p-8 bg-gray-50 overflow-y-auto">
          {children}
        </div>

        <div
          className="w-[35%] p-5 bg-gray-50 overflow-y-auto"
          ref={resumeRef}
        >
          <ResumePreview />
        </div>
      </div>

      <div className="md:hidden h-[calc(100%-60px)] overflow-y-auto p-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          {children}
        </div>

        <div className="bg-white p-4 rounded-lg shadow" ref={resumeRef}>
          <ResumePreview />
        </div>
      </div>

    </div>
  );
};

export default CreateLayout;
