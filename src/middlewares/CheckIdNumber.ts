import { NextFunction, Request, Response } from "express";

const checkIdnumber = (req: Request,res: Response, next: NextFunction) => {
    const paramId = Number(req.params.id);

    if(isNaN(paramId)){
        res
        .status(400)
        .send();
        return;
    }
    next();
};

export default checkIdnumber;