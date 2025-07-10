import { GameStateProvider } from "@/app/providers/GameStateContext";
import { MainGameScreen } from "@widgets/MainGameScreen/MainGameScreen";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <GameStateProvider>
        <div className={styles.globalScreen}>
          <MainGameScreen></MainGameScreen>
        </div>
      </GameStateProvider>
    </>
  );
}

export default App;
