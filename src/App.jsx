import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StepProvider } from "./Context/StepContext";
import ProtectedRoute from "./Routes/ProtectedRoute";

// Pages
import Homepage from "./Pages/Homepage";
import ChooseTemplate from "./Pages/Create/ChooseTemplate";
import Header from "./Pages/Create/Header";
import Summary from "./Pages/Create/Summary";
import Skills from "./Pages/Create/Skills";
import Education from "./Pages/Create/Education";
import Experience from "./Pages/Create/Experience";
import AddComponent from "./Pages/Create/AddComponent";
import Finalize from "./Pages/Create/Finalize";

export default function App() {
  return (
    <BrowserRouter>
      <StepProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/create/template" element={<ChooseTemplate />} />

          <Route
            path="/create/header"
            element={
              <ProtectedRoute stepNumber={1}>
                <Header />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create/summary"
            element={
              <ProtectedRoute stepNumber={2}>
                <Summary />
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
            path="/create/education"
            element={
              <ProtectedRoute stepNumber={4}>
                <Education />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create/experience"
            element={
              <ProtectedRoute stepNumber={5}>
                <Experience />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create/addcomponent"
            element={
              <ProtectedRoute stepNumber={6}>
                <AddComponent />
              </ProtectedRoute>
            }
          />

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
