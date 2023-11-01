import { FilterQuery } from "mongoose";
import { IMovies } from "../types/models/movies.type";
import { IFindQueryOptions } from "../types/query.type";
import { IQueryRequest } from "../types/request.type";
import { get, has, size } from "lodash";

export const getMoviesPaginationQuery = (
  request: IQueryRequest
): IFindQueryOptions<IMovies> => {
  const { pageNum, pageSize } = request.query;

  let filter: FilterQuery<IMovies> = { type: "movie" };
  let projection = {
    plot: 0,
    genres: 0,
    cast: 0,
    fullplot: 0,
    directors: 0,
    writers: 0,
    awards: 0,
    tomatoes: 0,
    languages: 0,
    countries: 0,
  };
  let sort = {};

  if (size(request.body.data.sort) > 0) {
    if (has(request.body.data.sort, "imdb")) {
      sort = { "imdb.rating": get(request.body.data.sort, "imdb") };
    }
  } else {
    sort = { _id: 1 };
  }

  if (request.body.data.search) {
    filter = {
      ...filter,
      title: { $regex: `${request.body.data.search}`, $options: "i" },
    };
  }

  return { filter, projection, pageNum: +pageNum, pageSize: +pageSize, sort };
};
