import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StepProvider } from "./Context/StepContext";
import ProtectedRoute from "./Routes/ProtectedRoute";

// Pages
import Homepage from "./pages/Homepage";
import ChooseTemplate from "./pages/Create/ChooseTemplate";
import Education from "./pages/Create/Education";
import Skills from "./pages/Create/Skills";
import Summary from "./pages/Create/Summary";

export default function App() {
  return (
    <BrowserRouter>
      <StepProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/create/template" element={<ChooseTemplate />} />
          <Route
            path="/create/education"
            element={
              <ProtectedRoute stepNumber={2}>
                <Education />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create/skills"
            element={
              <ProtectedRoute stepNumber={3}>
                <Skills />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create/summary"
            element={
              <ProtectedRoute stepNumber={4}>
                <Summary />
              </ProtectedRoute>
            }
          />
        </Routes>
      </StepProvider>
    </BrowserRouter>
  );
}
