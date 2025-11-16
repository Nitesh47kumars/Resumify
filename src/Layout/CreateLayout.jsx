import ResumePreview from "./ResumePreview";
import StepTracker from "./StepTracker";

const CreateLayout = ({ children }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-gray-100">
      
      <div className="w-[10%] bg-white shadow-md p-5">
        <StepTracker />
      </div>

      <div className="w-[30%] p-8 overflow-y-auto">
        {children}
      </div>

      <div className="w-[60%] bg-gray-50 border-l p-5 overflow-y-auto">
        <ResumePreview />
      </div>

    </div>
  );
};

export default CreateLayout;
