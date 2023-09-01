import { Request,Response } from "express";
import { UserService } from "../services/UserService";

export class UserController{
    private userService = new UserService();

    async signup(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;
    const createdUser = await this.userService.signup(email, password);

    if (!createdUser) {
      res.status(500).send({ status: "FAILED", data: "Oups..." });
      return;
    }

    res.status(201).send({ status: "OK", data: createdUser });
  }

  async login(req: Request,res: Response){
    const email = req.body.email;
    const password = req.body.password;
    const token = await this.userService.login(email, password);

    if (!token) {
        res.status(500).send({status:"FAILED",data:"oups..."});
        return;
    }
    res.status(201).send({ status: "OK", data: token });
  }
}