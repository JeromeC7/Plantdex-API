import { Request,Response } from "express";
import { BookService } from "../services/BookService";

export class BookController{
    private bookService = new BookService();

    async getAllBooks(req: Request,res: Response){
        //const allBooks = this.bookService.getAll();
        const allBooks = await this.bookService.getAll();
        res.send({status: "OK", data: allBooks});
    }

    async getBookById(req: Request, res: Response){
        const id = Number(req.params.id);
        const book = await this.bookService.getById(id);
        if (!book) {
        res.status(404).send({
            status: "FAILED",
            message: `Le livre avec l'id ${id} n'existe pas...`,
        });
        return;
        }
        res.send({ status: "OK", data: book });
    }
}