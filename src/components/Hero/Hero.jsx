export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src="/player.png" alt="Football player" className="player-img" />
      </div>

      <div className="hero-content">
        <h2>BLIV MEDLEM</h2>
        <p>Tilmeld dig og bliv en del af vores fodboldfællesskab</p>

        <div className="match">
          <img src="/ballerzy-logo.png" alt="Ballerzy FC" />
          <span>vs</span>
          <img src="/arsenal.png" alt="Arsenal" />
        </div>

        <h3>APRIL 24</h3>

        <div className="hero-buttons">
          <button className="btn-outline">KONTAKT OS</button>
          <button className="btn-primary">BLIV MEDLEM</button>
        </div>
      </div>
    </section>
  );
}
