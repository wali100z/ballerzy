import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BecomeMember from "./pages/BecomeMember";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Teams from "./pages/Teams";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<BecomeMember />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
