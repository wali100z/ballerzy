import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">ballerzy</div>

      <nav className="nav-links">
        <a href="/news">NYHEDER</a>
        <a href="/member">BLIV MEDLEM</a>
        <a href="/gallery">BILLEDER</a>
        <a href="/teams">HOLD</a>
      </nav>

      <button className="hamburger" onClick={() => setOpen(true)}>
        ☰
      </button>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
