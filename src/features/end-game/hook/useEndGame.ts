import { useGameContext } from "@/entities/GameState";
import { EndGameService } from "../service/endGameService";

export const useEndGame = () => {
  const { gameState, setGameState } = useGameContext();

  const StartGame = () => {
    setGameState(EndGameService.GlobalScreen(gameState));
  };

  return {
    StartGame,
  };
};
