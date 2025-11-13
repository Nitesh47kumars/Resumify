import { Navigate } from "react-router-dom";
import { useStep } from "../Context/StepContext";

export default function ProtectedRoute({ children, stepNumber }) {
  const { completedStep } = useStep();

  if (completedStep < stepNumber - 1) {
    return <Navigate to="/" replace />;
  }

  return children;
}
