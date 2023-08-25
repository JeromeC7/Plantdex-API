import { Router,Request, Response } from "express";
import { BookController } from '../controllers/BookController';
import checkIdnumber from "../middlewares/CheckIdNumber";

const bookRouter = Router();
const bookController = new BookController();

bookRouter.get("/",(req: Request,res: Response)=>{
    bookController.getAllBooks(req,res);
});
bookRouter.get("/:id",checkIdnumber,(req: Request,res: Response)=>{
    bookController.getBookById(req,res);
});

export default bookRouter;