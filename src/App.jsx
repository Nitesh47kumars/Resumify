import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StepProvider } from "./Context/StepContext";
import ProtectedRoute from "./Routes/ProtectedRoute";

// Pages
import Homepage from "./Pages/Homepage";
import ChooseTemplate from "./Pages/Create/ChooseTemplate";
import Education from "./Pages/Create/Education";
import Summary from "./Pages/Create/Summary";
import Experience from "./Pages/Create/Experience";
import Finalize from "./Pages/Create/Finalize";

export default function App() {
  return (
    <BrowserRouter>
      <StepProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Step 1 */}
          <Route path="/create/template" element={<ChooseTemplate />} />

          {/* Step 2 */}
          <Route
            path="/create/education"
            element={
              <ProtectedRoute stepNumber={2}>
                <Education />
              </ProtectedRoute>
            }
          />

          {/* Step 3 */}
          <Route
            path="/create/summary"
            element={
              <ProtectedRoute stepNumber={3}>
                <Summary />
              </ProtectedRoute>
            }
          />

          {/* Step 4 */}
          <Route
            path="/create/experience"
            element={
              <ProtectedRoute stepNumber={4}>
                <Experience />
              </ProtectedRoute>
            }
          />

          {/* Step 5 */}
          <Route
            path="/create/finalize"
            element={
              <ProtectedRoute stepNumber={5}>
                <Finalize />
              </ProtectedRoute>
            }
          />
        </Routes>
      </StepProvider>
    </BrowserRouter>
  );
}
