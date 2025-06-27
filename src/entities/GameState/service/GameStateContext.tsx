import { createContext, useState } from "react";
import type { GameStateType } from "@entities/GameState";

export const GameContext = createContext<null | GameStateType>(null);

export const GameStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [gameState, setGameState] = useState<GameStateType>;
};
