import type { GameStateType } from "@entities/GameState";
import { GameService } from "./GameService";
import { GameContext } from "./GameContext";
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
