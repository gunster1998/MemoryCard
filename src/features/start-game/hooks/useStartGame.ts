import { useGameContext } from "@entities/GameState";
import { StartGameService } from "../service/startGameService";
import { fetchCards } from "../api/featchCard";

export const useStartGame = () => {
  const { gameState, setGameState } = useGameContext();

  const initGame = async (
    countCards: number,
    setLoading: React.Dispatch<React.SetStateAction<null | number>>
  ) => {
    setLoading(countCards);
    const cards = await fetchCards();

    if (!cards) {
      console.error(" Каточки не получены");
      return;
    }

    const cardObject = cards
      .sort(() => Math.random() - 0.5)
      .slice(0, countCards)
      .map((card: { img: string }) => ({
        id: crypto.randomUUID(),
        url: `https://cdn.cloudflare.steamstatic.com${card.img.replace(
          /\?$/,
          ""
        )}`,
        isSelected: false,
      }));

    setLoading(countCards);
    setGameState(StartGameService.startGame(gameState, cardObject));
  };

  return {
    initGame,
  };
};
