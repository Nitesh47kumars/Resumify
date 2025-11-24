import ResumePreview from "./ResumePreview";
import StepTracker from "./StepTracker";

const CreateLayout = ({ children, resumeRef }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-gray-100">

      <div className="w-[15%] bg-white shadow-md p-5">
        <StepTracker />
      </div>

      <div className="w-[50%] p-8 bg-gray-50 overflow-y-auto">
        {children}
      </div>

      <div
        className="w-[35%] bg-gray-50 border-l p-5 overflow-y-auto"
        ref={resumeRef}
      >
        <ResumePreview />
      </div>

    </div>
  );
};

export default CreateLayout;
