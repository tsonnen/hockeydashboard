import { Game } from "@/app/models/game";
import { TeamDisplay } from "@/app/components/team-display/team-display";
import styles from "./game-card.module.css";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <span className={styles.gameCard}>
      <TeamDisplay team={game.awayTeam} gameStarted={game.gameStarted} />
      <div className={styles.gameStatus}>
        {game.gameInProgress && game.clock && (
          <>
            <div className={styles.clock}>{game.clock.timeRemaining}</div>
            <div className={styles.period}>Period {game.period}</div>
          </>
        )}

        <div className={styles.startTime}>{game.statusString}</div>
      </div>
      <TeamDisplay team={game.homeTeam} gameStarted={game.gameStarted} />
    </span>
  );
}
