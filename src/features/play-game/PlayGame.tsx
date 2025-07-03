import { useGameContext } from "@/entities/GameState";
import styles from "./PlayGame.module.css";

export const PlayGame: React.FC = () => {
  const { gameState, setGameState } = useGameContext();

  const renderListCards = gameState.cards.map((card, index) => (
    <div className={styles.bodrderCard}>
      <img className={styles.imgCard} src={gameState.cards[index].url} alt="" />
    </div>
  ));
  return (
    <>
      <div className={styles.content}>
        <h1>Игра для памяти</h1>
        <p>Выбрано карточек: {gameState.matchedCardsCount}</p>
        <p>🃏 Количество карточек: {gameState.cardCount}</p>
        <div className={styles.bodyGame}>{renderListCards}</div>;
      </div>
    </>
  );
};
