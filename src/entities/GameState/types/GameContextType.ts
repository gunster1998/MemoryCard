import type { GameStateType } from "@/entities/GameState";
import { SetStateAction } from "react";

export default interface GameContextType {
  gameState: GameStateType;
  gameStateSet: React.Dispatch<SetStateAction<GameStateType>>;
}
