import { GameContext } from "./GameContext";
import { useContext } from "react";
export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error(
      "useGameContext должен использоваться только внутри GameContext"
    );
  }
  return context;
};
