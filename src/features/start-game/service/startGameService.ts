import { GameStateType, Card } from "@entities/GameState";

export const StartGameService = {
  startGame(gameState: GameStateType, cards: Card[]): GameStateType {
    return {
      ...gameState,
      cards: cards,
      statusGame: "playing",
      cardCount: cards.length,
      matchedCardsCount: 0,
    };
  },
};
