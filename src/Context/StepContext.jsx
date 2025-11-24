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

  const addDynamicStep = (category, inputsArray, customTitle = "") => {
    setFormData((prev) => ({
      ...prev,
      extraComponents: [
        ...prev.extraComponents,
        {
          id: Date.now(),
          category,
          inputs: inputsArray,
          customTitle: category === "custom" ? customTitle : undefined,
        },
      ],
    }));
  };

  const removeDynamicStep = (category) => {
    setFormData((prev) => ({
      ...prev,
      extraComponents: prev.extraComponents.filter(
        (item) => item.category !== category
      ),
    }));
  };

  useEffect(() => {
    sessionStorage.setItem("resumeFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    sessionStorage.setItem("resumeCompletedStep", completedStep);
  }, [completedStep]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const isDirty =
        JSON.stringify(formData) !== JSON.stringify(initialFormData);

      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formData]);

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
        removeDynamicStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}
