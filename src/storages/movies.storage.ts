import Movies from "../models/movies.model";
import { IMovies } from "../types/models/movies.type";
import { IFindQueryOptions } from "../types/query.type";

export default class MoviesStorage {
  constructor(private _model = Movies) {}

  getAllMovies = async (queryOptions: IFindQueryOptions<IMovies>) => {
    const { filter, projection, pageNum, pageSize, sort } = queryOptions;

    return this._model
      .find(filter, projection)
      .sort(sort)
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize)
      .lean();
  };
}
