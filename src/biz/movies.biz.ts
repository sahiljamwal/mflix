import MoviesStorage from "../storages/movies.storage";
import { IQueryRequest } from "../types/request.type";
import { getMoviesPaginationQuery } from "../helpers/movies-query.helper";

export default class MoviesBiz {
  constructor(private _moviesStorageObj = new MoviesStorage()) {}

  getAllMovies = async (request: IQueryRequest) => {
    try {
      const [movies, moviesCount] = await Promise.all([
        this._moviesStorageObj.getAllMovies(getMoviesPaginationQuery(request)),
        this._moviesStorageObj.getAllMoviesCount(
          getMoviesPaginationQuery(request)
        ),
      ]);

      return { meta: { count: moviesCount }, data: movies };
    } catch (err) {
      throw err;
    }
  };
}
