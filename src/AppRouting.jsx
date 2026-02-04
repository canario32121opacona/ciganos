import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AboutUs from "./pages/about/aboutUs";
function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} /> {/* Fixed */}
    </Routes>
  );
}

export default AppRouting;