import MoviesStorage from "../storages/movies.storage";
import { IQueryRequest } from "../types/request.type";
import { getMoviesPaginationQuery } from "../helpers/movies-query.helper";

export default class MoviesBiz {
  constructor(private _moviesStorageObj = new MoviesStorage()) {}

  getAllMovies = async (request: IQueryRequest) => {
    try {
      const movies = await this._moviesStorageObj.getAllMovies(
        getMoviesPaginationQuery(request)
      );

      return movies;
    } catch (err) {
      throw err;
    }
  };
}
