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
        extra: [],
        extraComponents: [], 
        template: "",
      };

  // 🔥 IMPORTANT FIX: Patch old stored data missing "extraComponents"
  if (!initialFormData.extraComponents) {
    initialFormData.extraComponents = [];
  }

  const [formData, setFormData] = useState(initialFormData);

  const storedStep = sessionStorage.getItem("resumeCompletedStep");
  const [completedStep, setCompletedStep] = useState(
    storedStep ? Number(storedStep) : 1
  );

  const [previewImage, setPreviewImage] = useState(null);

  // Add dynamic extra component (certificates, custom sections, etc)
  const addDynamicStep = (componentName, data) => {
    setFormData((prev) => ({
      ...prev,
      extraComponents: [
        ...(prev.extraComponents || []),
        {
          id: Date.now(),
          name: componentName,
          data,
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

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);

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
