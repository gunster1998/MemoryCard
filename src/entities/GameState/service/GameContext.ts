import type { GameContextType } from "@entities/GameState";
import { createContext } from "react";

export const GameContext = createContext<GameContextType | null>(null);
