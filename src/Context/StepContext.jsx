import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    education: [],
    experience: [],
    skills: [],
  });

  const [completedStep, setCompletedStep] = useState(1);

  // ⭐ NEW: stores canvas preview image (base64)
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
