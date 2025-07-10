import type { GameStateType } from "@entities/GameState";
import { GameService } from "@entities/GameState/service/GameService";
import { GameContext } from "@entities/GameState/service/GameContext";
import { useState } from "react";
export const GameStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [gameState, setGameState] = useState<GameStateType>(
    GameService.createEmptyGame()
  );

  return (
    <GameContext value={{ gameState, setGameState }}>{children}</GameContext>
  );
};
