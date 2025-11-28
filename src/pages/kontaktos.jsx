import styles from "./kontaktos.module.scss";

export default function KontaktOs() {
  return (
    <section className={styles.kontaktSection}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Kontakt Os</h2>
        <p>Vi er altid klar til at hjælpe dig</p>
      </div>

      {/* Contact Info */}
      <div className={styles.infoContainer}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h3>Kontaktinformation</h3>
          <p>📞 +45 12 34 56 78</p>
          <p>✉️ info@klubben.dk</p>
          <p>📍 Hovedgaden 123, 1234 København K</p>
          <p>⏰ Man-Fre: 06:00-22:00, Lør-Søn: 08:00-20:00</p>

          {/* Google Map */}
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h3>Send Os En Besked</h3>
          <form>
            <input type="text" placeholder="Dit fulde navn" required />
            <input type="email" placeholder="din@email.dk" required />
            <input type="tel" placeholder="+45 12 34 56 78" required />
            <textarea placeholder="Skriv din besked her..." rows="5" required></textarea>
            <button type="submit">Send besked</button>
          </form>
        </div>

        {/* Visit Section */}
        <div className={styles.visit}>
          <h3>Besøg Os</h3>
          <p>
            Kom forbi til en uforpligtende snak og se vores faciliteter. Du er altid velkommen!
          </p>
          <p>
            Book en guidet rundvisning ved at kontakte os på telefon eller e-mail.
          </p>
        </div>
      </div>
    </section>
  );
}
