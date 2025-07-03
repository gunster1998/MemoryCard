export interface Card {
  id: string;
  url: string;
  isSelected: boolean;
}

type StatusGame = "idle" | "playing" | "end";

export interface GameStateType {
  cards: Card[];
  cardCount: number;
  statusGame: StatusGame;
  matchedCardsCount: number;
}
