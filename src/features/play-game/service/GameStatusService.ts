import { GameStateType } from "@entities/GameState";

export const GameStatusService = {
  changeStatusGame(
    gameState: GameStateType,
    statusGame: "idle" | "playing" | "end"
  ): GameStateType {
    return {
      ...gameState,
      statusGame: statusGame,
    };
  },
};
