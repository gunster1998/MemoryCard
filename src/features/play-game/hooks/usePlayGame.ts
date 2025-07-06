import { useGameContext } from "@/entities/GameState";
import { PlayGameService } from "../service/playGameService";

export const usePlayGame = () => {
  const { gameState, setGameState } = useGameContext();

  const selectCard: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const idElement = target.dataset.id;
    if (!idElement) return;
    console.log("нажал клавишу и вызвал функцию");
    const foundCardIndex = gameState.cards.find(
      (card) => card.id === idElement
    );
    if (!foundCardIndex?.isSelected) {
      let newState = PlayGameService.updateCard(gameState, idElement);
      newState = PlayGameService.mixedCard(newState);
      if (newState.matchedCardsCount >= newState.cardCount) {
        setGameState(PlayGameService.changeStatusGame(newState, "end"));
      } else {
        setGameState(newState);
      }
    } else {
      setGameState(PlayGameService.changeStatusGame(gameState, "end"));
    }
  };
  return {
    selectCard,
  };
};
