import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.links}>
          <a href="/news">Nyheder</a>
          <a href="/member">Bliv medlem</a>
          <a href="/gallery">Billeder</a>
          <a href="/contact">Kontakt Os</a>
        </div>

        <div className={styles.contact}>
          <p>+45 12 34 56 78</p>
          <p>info@klubben.dk</p>
          <p>Hovedgaden 123, 1234 København</p>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2025 Klubben. Alle rettigheder forbeholdes.
      </div>
    </footer>
  );
}
