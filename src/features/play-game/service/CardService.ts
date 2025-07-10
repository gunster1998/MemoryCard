import { GameStateType } from "@entities/GameState";

export const CardService = {
  updateCard(gameState: GameStateType, id: string): GameStateType {
    return {
      ...gameState,
      matchedCardsCount: gameState.matchedCardsCount + 1,
      cards: gameState.cards.map((card) => {
        if (card.id === id) {
          return { ...card, isSelected: true };
        }
        return card;
      }),
    };
  },
  mixedCard(gameState: GameStateType): GameStateType {
    return {
      ...gameState,
      cards: gameState.cards.sort(() => Math.random() - 0.5),
    };
  },
};
