import { GameStateType, useGameContext, Card } from "@entities/GameState";
import { GameStatusService } from "../service/GameStatusService";
import { CardService } from "@features/play-game/service/CardService";

export const usePlayGame = () => {
  const { gameState, setGameState } = useGameContext();

  const extractCardId = (
    event: React.MouseEvent<HTMLButtonElement>
  ): string | null => {
    const target = event.target as HTMLButtonElement;
    const idElement = target.dataset.id;
    return idElement || null;
  };

  const canSelectCard = (cardId: string): boolean => {
    const card = gameState.cards.find((card: Card) => card.id === cardId);
    return card ? !card.isSelected : false;
  };

  const isGameCompleted = (state: GameStateType): boolean => {
    return state.matchedCardsCount >= state.cardCount;
  };

  const handleValidCardSelection = (cardId: string): void => {
    let newState = CardService.updateCard(gameState, cardId);
    newState = CardService.mixedCard(newState);
    if (isGameCompleted(newState)) {
      setGameState(GameStatusService.changeStatusGame(newState, "end"));
    } else {
      setGameState(newState);
    }
  };
  const selectCard: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const cardId = extractCardId(e);

    if (!cardId) return;
    console.log(cardId);
    if (canSelectCard(cardId)) {
      handleValidCardSelection(cardId);
    } else {
      setGameState(GameStatusService.changeStatusGame(gameState, "end"));
    }
  };
  return {
    selectCard,
    gameState,
  };
};
