import { NextFunction, Request, Response } from "express";
import { HTTP_CODES } from "../constants/http-status-codes.constant";
import { bodySchema, querySchema } from "../schemas/movies.schema";

export const validateMoviesOptions = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    request.query = await querySchema.validateAsync(request.query);
    request.body.data = await bodySchema.validateAsync(request.body.data);
    return next();
  } catch (err) {
    console.error(err);
    response
      .status(HTTP_CODES.BAD_REQUEST)
      .send({ success: false, erorr: (err as Error).message });
  }
};
