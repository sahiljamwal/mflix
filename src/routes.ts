import express, { Request, Response } from "express";

const apiRouter = express.Router();

apiRouter.get("/health", (_req: Request, res: Response) => res.sendStatus(200));

export default apiRouter;
