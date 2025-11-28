import styles from "./nyheder.module.css";

const nyhederData = [
  {
    title: "Sejr i Weekendens Kamp",
    date: "20. november 2025",
    description:
      "Vores hold vandt 3-1 i en spændende kamp mod topholdet. En fantastisk præstation af hele holdet!",
    image: "src/assets/agf-efb-31-03-36.webp",
  },
  {
    title: "Ny Træningsfaciliteter",
    date: "15. november 2025",
    description:
      "Vi er glade for at kunne præsentere vores nyligt renoverede træningsfaciliteter for alle medlemmer.",
    image: "src/assets/R.jpeg",
  },
  {
    title: "Ungdomshold Klar til Sæson",
    date: "10. november 2025",
    description:
      "Vores ungdomshold har haft en fantastisk forberedelse og er nu klar til den kommende sæson.",
    image: "src/assets/Bayern-Munich-Football-Academy-1024x683.jpg",
  },
];

export default function Nyheder() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Seneste Nyheder</h1>

      <div className={styles.newsGrid}>
        {nyhederData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} className={styles.image} />
            </div>
            <p className={styles.date}>{item.date}</p>
            <h2 className={styles.newsTitle}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
            <button className={styles.readMore}>Læs mere</button>
          </div>
        ))}
      </div>
    </section>
  );
}
