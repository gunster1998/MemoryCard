import { useGameContext } from "@entities/GameState/service/useGameContext";
import { StartGame } from "@/features/start-game/StartGame";
import { PlayGame } from "@/features/play-game/PlayGame";
import { EndGame } from "@/features/end-game/EndGame";

export const MainGameScreen = () => {
  const { gameState } = useGameContext();

  if (gameState.statusGame === "idle") return <StartGame />;
  if (gameState.statusGame === "playing") return <PlayGame />;
  if (gameState.statusGame === "end") return <EndGame />;
  return null;
};
