export interface ICardListProps {
  movies: ICardProps[];
}

export interface ICardProps {
  _id: string;
  runtime: number;
  num_mflix_comments: number;
  title: string;
  released: string;
  rated?: string;
  lastupdated: string;
  year: number;
  imdb: IImdb;
  type: string;
  poster?: string;
}

interface IImdb {
  rating: number;
  votes: number;
  id: number;
}
