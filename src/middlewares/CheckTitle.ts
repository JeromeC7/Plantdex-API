import { NextFunction, Request, Response } from "express";

const checkTitle = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  if (!body.title || body.title.trim() === "") {
    res
      .status(400)
      .send({
        status: "FAILED",
        message: "La propriété title est obligatoire",
      });
    return;
  }
  next();
};

export default checkTitle;