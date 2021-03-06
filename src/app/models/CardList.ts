import Card from "./Card";

export default interface ICardList {
  id: string;
  name: string;
  cards: Card[];
  isDoneSection: boolean;
}
