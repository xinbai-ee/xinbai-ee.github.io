import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Background from "./pages/Background";
import BackgroundDetail from "./pages/BackgroundDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/background" element={<Background />} />
        <Route path="/background/event/:year" element={<BackgroundDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
