import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StepProvider } from "./Context/StepContext";
import ProtectedRoute from "./Routes/ProtectedRoute";

// Pages
import Homepage from "./Pages/Homepage";
import ChooseTemplate from "./Pages/Create/ChooseTemplate";
import Header from "./Pages/Create/Header";
import Education from "./Pages/Create/Education";
import Summary from "./Pages/Create/Summary";
import Experience from "./Pages/Create/Experience";
import AddOtherPart from "./Pages/Create/AddOtherPart";
import Finalize from "./Pages/Create/Finalize";

export default function App() {
  return (
    <BrowserRouter>
      <StepProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Resume Creation Flow */}
          <Route path="/create/template" element={<ChooseTemplate />} />

          <Route
            path="/create/header"
            element={
              <ProtectedRoute stepNumber={2}>
                <Header />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create/education"
            element={
              <ProtectedRoute stepNumber={3}>
                <Education />
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

          <Route
            path="/create/experience"
            element={
              <ProtectedRoute stepNumber={5}>
                <Experience />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create/add-other"
            element={
              <ProtectedRoute stepNumber={6}>
                <AddOtherPart />
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
