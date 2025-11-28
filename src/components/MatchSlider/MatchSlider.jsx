import { useState, useEffect } from "react";
import styles from "./MatchSlider.module.scss";

export default function MatchSlider() {
  const [matches, setMatches] = useState([]);
  const [index, setIndex] = useState(0);

  // Hardcoded matches (replace logos with your own paths)
  const sampleMatches = [
    {
      homeTeam: { name: "Brazil", logo: "src/assets/logos/OIP.webp" },
      awayTeam: { name: "France", logo: "src/assets/logos/OIP (1).webp" },
      utcDate: "2025-12-01T18:00:00Z"
    },
    {
      homeTeam: { name: "Argentina", logo: "src/assets/logos/OIP (2).webp" },
      awayTeam: { name: "Germany", logo: "src/assets/logos/OIP (3).webp" },
      utcDate: "2025-12-03T20:00:00Z"
    },
    {
      homeTeam: { name: "Spain", logo: "src/assets/logos/OIP (4).webp" },
      awayTeam: { name: "Portugal", logo: "src/assets/logos/Portugal-National-Football-Team-Logo.png" },
      utcDate: "2025-12-05T17:30:00Z"
    }
  ];

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setMatches(sampleMatches);
    }, 200);
  }, []);

  // Auto slider
  useEffect(() => {
    if (matches.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % matches.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [matches]);

  if (matches.length === 0) {
    return <p>Loading matches...</p>;
  }

  const match = matches[index];

  return (
    <div className={styles.slider}>
      <h3>Upcoming Matches</h3>

      <div className={styles.card}>
        <div className={styles.teamRow}>
          <img src={match.homeTeam.logo} alt={match.homeTeam.name} />
          <span>vs</span>
          <img src={match.awayTeam.logo} alt={match.awayTeam.name} />
        </div>

        <p>
          {match.homeTeam.name} <span>vs</span> {match.awayTeam.name}
        </p>

        <small>{new Date(match.utcDate).toDateString()}</small>
      </div>
    </div>
  );
}
