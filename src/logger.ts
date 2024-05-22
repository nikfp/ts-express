import { NextFunction, Request, Response } from "express";

const logger = function (_req: Request, _res: Response, next: NextFunction) {
  const time = (new Date()).toISOString();

  console.log(`Request received at ${time}`);

  next();
};

export default logger;
