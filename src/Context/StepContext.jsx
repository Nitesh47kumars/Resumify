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

  // ADD A NEW SECTION
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

  // DELETE A SECTION
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
