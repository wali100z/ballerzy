import { Routes, Route } from "react-router-dom";
import BlivMedlem from "./pages/BlivMedlem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blivmedlem" element={<BlivMedlem />} />
      <Route path="/kontaktos" element={<KontaktOs />} />
    </Routes>
  );
}

export default App;
