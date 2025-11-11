import { Navigate } from "react-router-dom";
import { useStep } from "../Context/StepContext";

export default function ProtectedRoute({ children, stepNumber }) {
  const { completedStep } = useStep();
  return completedStep >= stepNumber ? children : <Navigate to="/create/template" replace />;
}
