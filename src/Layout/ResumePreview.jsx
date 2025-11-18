import React from "react";
import { useStep } from "../Context/StepContext";
import ResumeTemplate1 from "../ResumeTemplates/Template1/ResumeTemplate1";

const ResumePreview = () => {
  const { formData } = useStep();

  const header = formData.header || {};

  const mergedData = {
    name: `${header.firstName || ""} ${header.lastName || ""}`.trim(),
    email: header.email || "",
    phone: header.phone || "",
    address: `${header.city || ""} ${header.state || ""} ${header.country || ""} ${header.pin || ""}`.trim(),
    summary: formData.summary || "",
    skills: formData.skills || [],
    experience: formData.experience || [],
    education: formData.education || [],
  
    header: {
      linkedin: header.linkedin || "",
      website: header.website || "",
      github: header.github || "",
    }
  };
  
  return (
    <div>
      <ResumeTemplate1 data={mergedData} />
    </div>
  );
};

export default ResumePreview;
