import styles from "./Gallery.module.scss";

const images = [
  "src/assets/photo-1549923015-badf41b04831.jpeg",
  "src/assets/photo-1559930198-26e8d7f0a4f7.jpeg",
  "src/assets/photo-1510210699649-901187bf15e4.jpeg",
  "src/assets/photo-1510210699649-901187bf15e4.jpeg",
  "src/assets/photo-1529848891152-72fea52a8f03.jpeg",
  "src/assets/photo-1568495019994-e9f1045bf0ac.jpeg",
  "src/assets/photo-1582586302869-715be816f60b.jpeg",
  "src/assets/photo-1618536516485-006eb4d1e9bb.jpeg",
  "src/assets/photo-1625187538367-6a8483a79cc2.jpeg",
  "src/assets/photo-1629977007398-a17feb6ddf14.jpeg",
  "src/assets/photo-1641029185333-7ed62a19d5f0.jpeg",
  "src/assets/photo-1650153067924-d4b3e4f1b224.jpeg",
  "src/assets/photo-1671245166799-9639823eb9b3.jpeg",
  "src/assets/photo-1710788605559-0a16daae12b4.jpeg",
  "src/assets/photo-1717584146940-118a65525da8.jpeg",
  "src/assets/photo-1746333253387-5aac26260c96.jpeg",
  "src/assets/photo-1757031298215-5041017293ae.jpeg",
  "src/assets/photo-1759210720456-c9814f721479.jpeg",
  "src/assets/photo-1759749222532-c2344aae7525.jpeg",
  "src/assets/photo-1760177379323-2b22f8d41707.jpeg",
];

export default function Gallery() {
  return (
    <div className={styles.wrapper}>
      <h1>Galleri</h1>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Gallery image ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
