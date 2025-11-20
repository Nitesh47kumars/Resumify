import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const StepContext = createContext();

export function StepProvider({ children }) {
  // Load from cookies
  const storedForm = Cookies.get("resumeFormData");
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
  const [completedStep, setCompletedStep] = useState(1);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    Cookies.set("resumeFormData", JSON.stringify(formData), {
      expires: 7,
      path: "/",
    });
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
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}
