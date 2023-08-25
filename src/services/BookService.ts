import { AppDataSource } from "../data-source";
import { Book } from "../entities/Book.entity";

export class BookService {
  private bookRepository = AppDataSource.getRepository(Book);
  // private bookList = [
  //   {
  //     id: 1,
  //     title: "The Hobbit",
  //   },
  //   {
  //     id: 2,
  //     title: "The Lord of the Rings",
  //   },
  //   {
  //     id: 3,
  //     title: "The Silmarillion",
  //   },
  //   {
  //     id: 4,
  //     title: "The Children of Hurin",
  //   },
  //   {
  //     id: 5,
  //     title: "The Fall of Gondolin",
  //   },
  // ];

  getAll(){
    //return this.bookList;
    return this.bookRepository.find();
  }
  getById(id:Number){
    //const found = this.bookList.find(x=>x.id===id);
    //return found;
    return{};
  }
}
