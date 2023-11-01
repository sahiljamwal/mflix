import express from "express";
import MoviesController from "../controllers/movies.controller";
import { validateMoviesOptions } from "../middlewares/movies.middleware";

const moviesRouter = express.Router();
const moviesControllerObj = new MoviesController();

moviesRouter.post("/", validateMoviesOptions, moviesControllerObj.getAllMovies);

export default moviesRouter;
