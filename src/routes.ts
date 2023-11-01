import express, { Request, Response } from "express";
import moviesRouter from "./routes/movies.route";

const apiRouter = express.Router();

apiRouter.use("/movies", moviesRouter);
apiRouter.get("/health", (_req: Request, res: Response) => res.sendStatus(200));

export default apiRouter;
