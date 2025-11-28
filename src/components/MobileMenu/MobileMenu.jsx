import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.scss";

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div
        className={`${styles["mobile-menu"]} ${open ? styles.open : ""}`}
      >
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>

        <Link className={styles.link} to="/news" onClick={onClose}>
          NYHEDER
        </Link>
        <Link className={styles.link} to="/member" onClick={onClose}>
          BLIV MEDLEM
        </Link>
        <Link className={styles.link} to="/gallery" onClick={onClose}>
          BILLEDER
        </Link>
        <Link className={styles.link} to="/teams" onClick={onClose}>
          OM KLUBBEN
        </Link>
       

      </div>
    </>
  );
}
