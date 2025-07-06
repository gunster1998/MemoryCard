import { GameStateType } from "@entities/GameState";

export const EndGameService = {
  GlobalScreen(gameState: GameStateType): GameStateType {
    return {
      ...gameState,
      statusGame: "idle",
    };
  },
};
