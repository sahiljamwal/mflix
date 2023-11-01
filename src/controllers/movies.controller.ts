import { Request, Response } from "express";
import { EC } from "../constants/error.constant";
import MoviesBiz from "../biz/movies.biz";
import { HTTP_CODES } from "../constants/http-status-codes.constant";
import { IQueryRequest } from "../types/request.type";

export default class MoviesController {
  constructor(private _moviesBizObj = new MoviesBiz()) {}

  getAllMovies = async (request: Request, response: Response) => {
    try {
      const data = await this._moviesBizObj.getAllMovies(
        request as IQueryRequest
      );
      return response.status(HTTP_CODES.OK).send({ success: true, data });
    } catch (err) {
      console.error(err);
      return response
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .send({ success: false, error: EC.INTERNAL_SERVER_ERROR });
    }
  };
}
