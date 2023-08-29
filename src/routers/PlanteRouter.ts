import { Router,Request, Response } from "express";
import { PlanteController } from '../controllers/PlanteController';
import checkIdnumber from "../middlewares/CheckIdNumber";
import checkTitle from "../middlewares/CheckTitle";
import checkIdNumber from "../middlewares/CheckIdNumber";
import checkToken from "../middlewares/CheckToken";

const planteRouter = Router();
const planteController = new PlanteController();



planteRouter.get("/",(req: Request,res: Response)=>{
    planteController.getAllPlants(req,res);
});
planteRouter.get("/:id",checkIdnumber,(req: Request,res: Response)=>{
    planteController.getPlantById(req,res);
});
planteRouter.post("/",(req: Request,res: Response)=>{
    planteController.create(req,res);
});
planteRouter.put(
  "/:id",
  checkIdNumber,
  (req: Request, res: Response) => {
    planteController.update(req, res);
  }
);
planteRouter.delete(
  "/:id",
  checkIdNumber,
  (req: Request, res: Response) => {
    planteController.delete(req, res);
  }
);

export default planteRouter;