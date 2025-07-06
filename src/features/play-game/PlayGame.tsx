import { useGameContext } from "@/entities/GameState";
import styles from "./PlayGame.module.css";
import { usePlayGame } from "@/features/play-game/hooks/usePlayGame";

export const PlayGame: React.FC = () => {
  const { gameState } = useGameContext();
  const { selectCard } = usePlayGame();

  const renderListCards = gameState.cards.map((card) => (
    <button
      key={card.id}
      data-id={card.id}
      className={styles.buttonCard}
      onClick={selectCard}
    >
      <img className={styles.imgCard} src={card.url} alt="" />
    </button>
  ));
  return (
    <>
      <div className={styles.PlayGame}>
        <div className={styles.describeGame}>
          <h1>Игра для памяти</h1>
          <p>Выбрано карточек: {gameState.matchedCardsCount}</p>
          <p>🃏 Количество карточек: {gameState.cardCount}</p>
        </div>
        <div className={styles.bodyGame}>{renderListCards}</div>
      </div>
    </>
  );
};
