import { useNavigate } from "react-router-dom";
import styles from "./hero.module.scss";

export default function Hero() {
  const navigate = useNavigate();

  const handleBlivMedlemClick = () => navigate("/blivmedlem");
  const handleKontaktOsClick = () => navigate("/kontaktos");


  return (
    <section className={styles.hero}>
      <div className={styles.gradientBG}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>BLIV MEDLEM</h1>
        <p className={styles.subtitle}>
          Følg din passion. Lev spillet. Bliv en del af fællesskabet.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={handleBlivMedlemClick}>
            BLIV MEDLEM
          </button>
          <button className={styles.secondaryBtn} onClick={handleKontaktOsClick}>
            KONTAKT OS
          </button>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <img src="src/assets/R.png" alt="Hero Visual" />
      </div>
    </section>
  );
}
