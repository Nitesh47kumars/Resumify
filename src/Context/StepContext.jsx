import { createContext, useContext, useState, useEffect } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  // Load saved formData from localStorage
  const savedData = JSON.parse(localStorage.getItem("formData")) || {};

  const [formData, setFormData] = useState({
    template: savedData.template || "",  // <── IMPORTANT
    header: savedData.header || {
      firstName: "",
      lastName: "",
      profession: "",
      city: "",
      country: "",
      pin: "",
      phone: "",
      email: "",
      linkedin: "",
      website: "",
      github: "",
    },
    summary: savedData.summary || "",
    education: savedData.education || [],
    experience: savedData.experience || [],
    skills: savedData.skills || [],
  });

  const [completedStep, setCompletedStep] = useState(
    savedData.completedStep || 1
  );

  const [previewImage, setPreviewImage] = useState(savedData.previewImage || null);

  // Save all changes to localStorage
  useEffect(() => {
    localStorage.setItem(
      "formData",
      JSON.stringify({
        ...formData,
        completedStep,
        previewImage,
      })
    );
  }, [formData, completedStep, previewImage]);

  return (
    <StepContext.Provider
      value={{
        formData,
        setFormData,
        completedStep,
        setCompletedStep,
        previewImage,
        setPreviewImage,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}
