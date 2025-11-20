import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const StepContext = createContext();

export function StepProvider({ children }) {

  // 1️⃣ Load from cookies on start
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

  // 2️⃣ Save to cookies whenever formData changes
  useEffect(() => {
    Cookies.set("resumeFormData", JSON.stringify(formData), {
      expires: 7, // days
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
