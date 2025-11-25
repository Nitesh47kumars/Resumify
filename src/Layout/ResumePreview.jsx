import React from "react";
import { useStep } from "../Context/StepContext";

import ResumeTemplate1 from "../ResumeTemplates/Template1/ResumeTemplate1";
import ResumeTemplate2 from "../ResumeTemplates/Template2/ResumeTemplate2";
import ResumeTemplate3 from "../ResumeTemplates/Template3/ResumeTemplate3";
import ResumeTemplate4 from "../ResumeTemplates/Template4/ResumeTemplate4";

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

  const selectedTemplate = formData.template;

  return (
    <div className="w-full">
      <div
        className="h-[900px] max-sm:h-[850px] w-[794px]  max-sm:w-[465px] p-5 max-sm:p-1"
        style={{
          transform: "scale(0.62)",
          transformOrigin: "top left"
        }}
      >
      {selectedTemplate === "template1" && <ResumeTemplate1 data={mergedData} />}
      {selectedTemplate === "template2" && <ResumeTemplate2 data={mergedData} />}
      {selectedTemplate === "template3" && <ResumeTemplate3 data={mergedData} />}
      {selectedTemplate === "template4" && <ResumeTemplate4 data={mergedData} />}

      {/* If no template selected => fallback */}
      {!selectedTemplate && <p>Please select a template.</p>}
    </div>
    </div>
  );
};

export default ResumePreview;
