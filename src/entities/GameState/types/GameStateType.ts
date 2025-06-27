interface Card {
  id: string;
  url: string;
  isSelected: boolean;
}

type StatusGame = "playing" | "gameover" | "win";

export interface GameStateType {
  cards: Card[];
  cardCount: number;
  statusGame: StatusGame;
  matchedCardsCount: number;
}
