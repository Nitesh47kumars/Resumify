import { createContext, useContext, useState, useEffect } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  const storedForm = sessionStorage.getItem("resumeFormData");

  const initialFormData = storedForm
    ? JSON.parse(storedForm)
    : {
        header: {
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
        summary: "",
        education: [],
        experience: [],
        skills: [],
        projects: [],
        extraComponents: [],
        template: "",
      };

  const [formData, setFormData] = useState(initialFormData);
  const [previewImage, setPreviewImage] = useState(null);

  const storedStep = sessionStorage.getItem("resumeCompletedStep");
  const [completedStep, setCompletedStep] = useState(
    storedStep ? Number(storedStep) : 1
  );

  // MAIN FIXED STEP: ALWAYS STORE ARRAY IN inputs
  const addDynamicStep = (category, inputsArray) => {
    setFormData((prev) => ({
      ...prev,
      extraComponents: [
        ...prev.extraComponents,
        {
          id: Date.now(),
          category,
          inputs: inputsArray, // Always array
        },
      ],
    }));
  };

  useEffect(() => {
    sessionStorage.setItem("resumeFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    sessionStorage.setItem("resumeCompletedStep", completedStep);
  }, [completedStep]);

  return (
    <StepContext.Provider
      value={{
        formData,
        setFormData,
        completedStep,
        setCompletedStep,
        previewImage,
        setPreviewImage,
        addDynamicStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}
