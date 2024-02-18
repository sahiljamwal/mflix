import { ICardProps } from "../components/cards.type";

export interface IMoviesResponse {
  success: boolean;
  data: {
    meta: { count: number };
    data: ICardProps[];
  };
}
