import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [formData, setFormData] = useState({
    header: {            // <── ADD THIS
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
    },
    summary: "",
    education: [],
    experience: [],
    skills: [],
  });
  

  const [completedStep, setCompletedStep] = useState(1);

  const [previewImage, setPreviewImage] = useState(null);

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
