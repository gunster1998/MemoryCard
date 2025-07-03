import styles from "./StartGame.module.css";
import ButtonUi from "@/shared/ui/Button/ButtonUi";
import { useStartGame } from "./hooks/useStartGame";
export const StartGame: React.FC = () => {
  const { initGame } = useStartGame();

  return (
    <>
      <div className={styles.popupGameStart}>
        <div className={styles.videoBackground}>
          <video autoPlay muted loop playsInline>
            <source
              type="video/webm"
              src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
            />
          </video>
          <div className={styles.content}>
            <div className={styles.describe}>
              <h1>Игра на память по героям Dota 2!</h1>
              <h2> Готов проверить свою память?</h2>
              <p>Выбери количество карточек и начни игру!</p>
            </div>
            <div className={styles.buttonsStartGame}>
              <ButtonUi type="button" onClick={() => initGame()}>
                16 Карточек
              </ButtonUi>
              <ButtonUi type="button" onClick={() => initGame()}>
                25 Карточек
              </ButtonUi>
              <ButtonUi type="button" onClick={() => initGame()}>
                50 Карточек
              </ButtonUi>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
