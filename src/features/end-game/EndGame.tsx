import style from "./EndGame.module.css";
import { useGameContext } from "@entities/GameState";
import ButtonUi from "@shared/ui/Button/ButtonUi";
import { useEndGame } from "./hook/useEndGame";
export const EndGame: React.FC = () => {
  const { gameState } = useGameContext();
  const { StartGame } = useEndGame();
  const gameStatus =
    gameState.cardCount === gameState.matchedCardsCount ? true : false;
  return (
    <div className={style.GlobalBlock}>
      <div className={style.EndBlock}>
        <h1>{gameStatus ? "Вы победили" : "Вы проиграли"}</h1>
        <ButtonUi onClick={StartGame}>На главную страницу</ButtonUi>
      </div>
    </div>
  );
};
