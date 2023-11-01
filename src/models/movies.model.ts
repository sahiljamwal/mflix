import { Schema, model } from "mongoose";
import { IMovies } from "../types/models/movies.type";

const schema = new Schema<IMovies>({
  plot: String,
  genres: [String],
  runtime: Number,
  rated: String,
  cast: [String],
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  writers: [String],
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: String,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: { rating: Number, numReviews: Number, meter: Number },
    dvd: Date,
    lastUpdated: Date,
  },
  num_mflix_comments: Number,
});

const Movies = model<IMovies>("Movies", schema, "movies");
export default Movies;
