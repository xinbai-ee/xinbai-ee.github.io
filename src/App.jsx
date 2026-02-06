import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Background from "./pages/Background";
import BackgroundDetail from "./pages/BackgroundDetail";
import Experience from "./pages/Experience";
import ExperienceDetail from "./pages/ExperienceDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/background" element={<Background />} />
        <Route path="/background/event/:year" element={<BackgroundDetail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/event/:year" element={<ExperienceDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
