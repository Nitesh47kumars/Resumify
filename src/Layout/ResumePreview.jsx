import React from "react";
import { useStep } from "../Context/StepContext";
import ResumeTemplate1 from "../ResumeTemplates/ResumeTemplate1";

const ResumePreview = () => {
  const { formData } = useStep();

  return (
    <div className="">
      <ResumeTemplate1 data={formData}/>
    </div>
  );
};

export default ResumePreview;
