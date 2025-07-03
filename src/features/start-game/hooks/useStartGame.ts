import { useGameContext } from "@/entities/GameState";
import { StartGameService } from "../service/startGameService";
export const useStartGame = () => {
  const { gameState, setGameState } = useGameContext();

  const initGame = async () => {
    const response = await fetch(`https://api.opendota.com/api/heroStats`);

    const cards = await response.json();

    const cardObject = cards.map((card: any) => ({
      id: crypto.randomUUID(),
      url: `https://cdn.cloudflare.steamstatic.com${card.img.replace(
        /\?$/,
        ""
      )}`,
      isSelected: false,
    }));

    setGameState(StartGameService.startGame(gameState, cardObject));
  };

  return {
    initGame,
  };
};
