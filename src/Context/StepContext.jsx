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
        template: "",
      };

  const [formData, setFormData] = useState(initialFormData);

  const storedStep = sessionStorage.getItem("resumeCompletedStep");
  const [completedStep, setCompletedStep] = useState(
    storedStep ? Number(storedStep) : 1
  );

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    sessionStorage.setItem("resumeFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    sessionStorage.setItem("resumeCompletedStep", completedStep);
  }, [completedStep]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
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
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}
