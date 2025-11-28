import styles from "./blivmedlem.module.scss";

export default function BlivMedlem() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Bliv Medlem</h1>
      <p className={styles.subtitle}>
        Vælg den medlemskabsplan der passer til dig
      </p>

      {/* PRICE CARDS */}
      <div className={styles.pricingGrid}>
        {/* BASIS */}
        <div className={styles.card}>
          <h3>Basis</h3>
          <p className={styles.price}>299 kr <span>/ pr. måned</span></p>
          <ul>
            <li>Adgang til alle træninger</li>
            <li>Brug af faciliteter</li>
            <li>Online medlemsområde</li>
            <li>Nyhedsbrev og updates</li>
          </ul>
          <button className={styles.btn}>Vælg plan</button>
        </div>

        {/* STANDARD */}
        <div className={styles.card}>
          <h3>Standard</h3>
          <p className={styles.price}>499 kr <span>/ pr. måned</span></p>
          <ul>
            <li>Alt fra Basis</li>
            <li>Personlig træningsplan</li>
            <li>Deltag i turneringer</li>
            <li>Rabat på merchandise</li>
            <li>Gratis gæstetræning (1x/md)</li>
          </ul>
          <button className={styles.btn}>Vælg plan</button>
        </div>

        {/* PREMIUM */}
        <div className={styles.card}>
          <h3>Premium</h3>
          <p className={styles.price}>799 kr <span>/ pr. måned</span></p>
          <ul>
            <li>Alt fra Standard</li>
            <li>1-til-1 træning (2x/md)</li>
            <li>Ernæringsrådgivning</li>
            <li>Prioriteret booking</li>
            <li>Fri merchandise</li>
            <li>VIP events</li>
          </ul>
          <button className={styles.btn}>Vælg plan</button>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className={styles.formSection}>
        <h2>Har du spørgsmål?</h2>
        <p>Udfyld formularen og vi vender tilbage hurtigst muligt</p>

        <form className={styles.form}>
          <input type="text" placeholder="Dit fulde navn" required />
          <input type="email" placeholder="din@email.dk" required />
          <input type="tel" placeholder="+45 12 34 56 78" required />
          <textarea placeholder="Skriv din besked her..." required />
          <button type="submit" className={styles.btnPrimary}>Send besked</button>
        </form>
      </div>

      {/* MEMBER BENEFITS */}
      <div className={styles.benefits}>
        <h2>Alle Medlemmer Får</h2>
        <ul>
          <li>✓ Gratis prøvetræning før tilmelding</li>
          <li>✓ Ingen bindingsperiode - opsig når du vil</li>
          <li>✓ Adgang til medlemsarrangementer</li>
          <li>✓ Professionelle og certificerede trænere</li>
          <li>✓ Moderne faciliteter og udstyr</li>
        </ul>
      </div>
    </section>
  );
}
