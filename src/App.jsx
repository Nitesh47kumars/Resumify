import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StepProvider } from "./Context/StepContext";
import ProtectedRoute from "./Routes/ProtectedRoute";

// Pages
import Homepage from "./Pages/Homepage";
import ChooseTemplate from "./Pages/Create/ChooseTemplate";
import Education from "./Pages/Create/Education";
import Summary from "./Pages/Create/Summary";
import Skills from "./Pages/Create/Skills"
import Experience from "./Pages/Create/Experience";
import Finalize from "./Pages/Create/Finalize";
import Header from "./Pages/Create/Header";
import AddOtherPart from "./Pages/Create/AddComponent";

export default function App() {
  return (
    <BrowserRouter>
      <StepProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Step 1 */}
          <Route path="/create/template" element={<ChooseTemplate />} />

          {/* Step 1 */}
          <Route
            path="/create/header"
            element={
              <ProtectedRoute stepNumber={1}>
                <Header />
              </ProtectedRoute>
            }
          />
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
            path="/create/skills"
            element={
              <ProtectedRoute stepNumber={4}>
                <Skills />
              </ProtectedRoute>
            }
          />

          {/* Step 5 */}
          <Route
            path="/create/experience"
            element={
              <ProtectedRoute stepNumber={5}>
                <Experience />
              </ProtectedRoute>
            }
          />
          
          {/* Step 6 */}
          <Route
            path="/create/addcomponent"
            element={
              <ProtectedRoute stepNumber={6}>
                <AddOtherPart />
              </ProtectedRoute>
            }
          />

          {/* Step 6 */}
          <Route
            path="/create/finalize"
            element={
              <ProtectedRoute stepNumber={7}>
                <Finalize />
              </ProtectedRoute>
            }
          />
        </Routes>
      </StepProvider>
    </BrowserRouter>
  );
}
