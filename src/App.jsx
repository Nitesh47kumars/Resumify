import React, { useState } from "react";
import ResumeForm from "./Components/ResumeForm";
import ResumePreview from "./Components/ResumePreview";

export default function App() {
  const [resumeData, setResumeData] = useState({ name: "", email: "", summary: "" });

  const handleChange = (field, value) => {
    setResumeData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="app-container">
      <ResumeForm onChange={handleChange} />
      <ResumePreview data={resumeData} />
    </div>
  );
}
