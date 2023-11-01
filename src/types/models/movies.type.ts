import { Types } from "mongoose";
import { Document } from "mongoose";

export interface IMovies extends Document {
  plot: string;
  genres: string[];
  runtime: number;
  rated: string;
  cast: string[];
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: IAwards;
  lastupdated: string;
  year: number;
  imdb: IImdb;
  countries: string[];
  type: string;
  tomatoes: ITomatoes;
  num_mflix_comments: number;
}

interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}

interface IImdb {
  rating: number;
  votes: number;
  id: number;
}

interface ITomatoes {
  viewer: IViewer;
  dvd: Date;
  lastUpdated: Date;
}

interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}
