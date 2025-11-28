import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./navbar.module.scss"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>ballerzy</div>

      {/* Desktop nav links */}
      <nav className={styles.navLinks}>
        <Link to="/news">NYHEDER</Link>
        <Link to="/member">BLIV MEDLEM</Link>
        <Link to="/gallery">BILLEDER</Link>
        <Link to="/teams">HOLD</Link>
      </nav>

      {/* Hamburger button (mobile only) */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Mobile menu panel */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
