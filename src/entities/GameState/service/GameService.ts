import { GameStateType } from "@entities/GameState";

export const GameService = {
  createEmptyGame(): GameStateType {
    return {
      cards: [],
      cardCount: 50,
      statusGame: "idle",
      matchedCardsCount: 0,
    };
  },
};
