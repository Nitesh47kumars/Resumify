import ResumePreview from "./ResumePreview";
import StepTracker from "./StepTracker";

const CreateLayout = ({ children }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-[20%] bg-white shadow-md p-5">
        <StepTracker />
      </div>

      {/* Form Page */}
      <div className="w-[50%] p-8 overflow-y-auto">
        {children}
      </div>

      {/* Live Preview */}
      <div className="w-[30%] bg-gray-50 border-l p-5 overflow-y-auto">
        <ResumePreview />
      </div>

    </div>
  );
};

export default CreateLayout;
