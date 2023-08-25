import { Router,Request, Response } from "express";
import { BookController } from '../controllers/BookController';
import checkIdnumber from "../middlewares/CheckIdNumber";
import checkTitle from "../middlewares/CheckTitle";
import checkIdNumber from "../middlewares/CheckIdNumber";

const bookRouter = Router();
const bookController = new BookController();



bookRouter.get("/",(req: Request,res: Response)=>{
    bookController.getAllBooks(req,res);
});
bookRouter.get("/:id",checkIdnumber,(req: Request,res: Response)=>{
    bookController.getBookById(req,res);
});
bookRouter.post("/",checkTitle,(req: Request,res: Response)=>{
    bookController.create(req,res);
});
bookRouter.put(
  "/:id",
  checkIdNumber,
  checkTitle,
  (req: Request, res: Response) => {
    bookController.update(req, res);
  }
);
bookRouter.delete(
  "/:id",
  checkIdNumber,
  (req: Request, res: Response) => {
    bookController.delete(req, res);
  }
);

export default bookRouter;