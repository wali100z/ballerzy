export default function MobileMenu({ open, onClose }) {
  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`} onClick={onClose}></div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button className="close" onClick={onClose}>✕</button>

        <a href="/news">NYHEDER</a>
        <a href="/member">BLIV MEDLEM</a>
        <a href="/gallery">BILLEDER</a>
        <a href="/teams">HOLD</a>
      </div>
    </>
  );
}
