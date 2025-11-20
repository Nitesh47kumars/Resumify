import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const StepContext = createContext();

export function StepProvider({ children }) {
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

  // 🔥 Load completed step from cookie
  const storedStep = Cookies.get("resumeCompletedStep");
  const [completedStep, setCompletedStep] = useState(
    storedStep ? Number(storedStep) : 1
  );

  const [previewImage, setPreviewImage] = useState(null);

  // 🔥 Save formData to cookie
  useEffect(() => {
    Cookies.set("resumeFormData", JSON.stringify(formData), {
      expires: 7,
      path: "/",
    });
  }, [formData]);

  // 🔥 Save completedStep to cookie
  useEffect(() => {
    Cookies.set("resumeCompletedStep", completedStep, {
      expires: 7,
      path: "/",
    });
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
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}
