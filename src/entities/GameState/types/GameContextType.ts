import type { GameStateType } from "@/entities/GameState";
import { SetStateAction } from "react";

export interface GameContextType {
  gameState: GameStateType;
  setGameState: React.Dispatch<SetStateAction<GameStateType>>;
}
