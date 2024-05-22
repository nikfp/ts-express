import { NextFunction, Request, Response } from "express";

export const messageAdder = function (
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  req.serverMessage = "This is a custom message added to the request";

  next();
};

export const messageReader = function (
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const message = req.serverMessage;

  if (!message) {
    console.log("No custom message set for this route");
  } else {
    console.log(`Server says: ${message}`);
  }

  next();
};
