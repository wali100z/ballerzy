export default function MatchCard({ team1, team2, date }) {
  return (
    <div className="match-card">
      <div className="teams">
        <span>{team1}</span> <span>vs</span> <span>{team2}</span>
      </div>
      <p>{date}</p>
    </div>
  );
}
