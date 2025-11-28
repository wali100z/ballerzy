import styles from "./OmKlubben.module.scss";

export default function OmKlubben() {
  return (
    <section className={styles.about}>
      <h1>Om Klubben</h1>
      <p className={styles.subtitle}>
        Lær mere om vores historie og værdier
      </p>

      {/* Historie */}
      <div className={styles.section}>
        <h2>Klubben community</h2>

        <img src="src/assets/photo-1629977007398-a17feb6ddf14.jpeg" alt="" />
        <h3>Vores Historie</h3>
        <p>
          Klubben blev grundlagt i 1975 med en vision om at skabe et fællesskab
          hvor alle, uanset alder og niveau, kunne dyrke deres passion for sport.
        </p>

        <p>
          I dag er vi stolte af at have over 500 medlemmer og tilbyde en bred
          vifte af aktiviteter og træningsprogrammer. Vores faciliteter er
          konstant blevet opgraderet for at sikre den bedst mulige oplevelse for
          vores medlemmer.
        </p>

        <p>
          Vi er mere end bare en sportsklub - vi er et fællesskab der støtter
          hinanden, både på og udenfor banen.
        </p>
      </div>

      {/* Værdier */}
      <div className={styles.section}>
        <h3>Vores Værdier</h3>

        <ul className={styles.values}>
          <li>
            <h4>Fællesskab</h4>
            <p>
              Vi tror på at styrke fællesskabet gennem sport og sociale 
              aktiviteter.
            </p>
          </li>

          <li>
            <h4>Ambition</h4>
            <p>
              Vi stræber efter at udvikle både individer og hold til deres fulde
              potentiale.
            </p>
          </li>

          <li>
            <h4>Excellens</h4>
            <p>
              Vi tilbyder professionel træning og faciliteter i verdensklasse.
            </p>
          </li>

          <li>
            <h4>Passion</h4>
            <p>
              Vi elsker det vi gør og deler vores passion med alle medlemmer.
            </p>
          </li>
        </ul>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div>
          <h2>500+</h2>
          <p>Medlemmer</p>
        </div>

        <div>
          <h2>50</h2>
          <p>År</p>
        </div>

        <div>
          <h2>15</h2>
          <p>Trænere</p>
        </div>

        <div>
          <h2>8</h2>
          <p>Hold</p>
        </div>
      </div>
    </section>
  );
}
