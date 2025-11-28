// src/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";  
import Footer from "./components/Footer/Footer";  
import Home from "./pages/Home";
import BlivMedlem from "./pages/blivmedlem";
import News from "./pages/nyheder";
import Gallery from "./pages/Gallery";
import Teams from "./pages/omklubben";
import Kontaktos from "./pages/kontaktos";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blivmedlem" element={<BlivMedlem />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/kontaktos" element={<Kontaktos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
