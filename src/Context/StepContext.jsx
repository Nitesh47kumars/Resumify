import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [completedStep, setCompletedStep] = useState(1);
  const [formData, setFormData] = useState({
    template: "",
    education: [],
    skills: [],
    summary: "",
  });

  return (
    <StepContext.Provider value={{ completedStep, setCompletedStep, formData, setFormData }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => useContext(StepContext);
