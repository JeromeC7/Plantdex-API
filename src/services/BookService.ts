import { AppDataSource } from "../data-source";
import { Book } from "../entities/Book.entity";

export class BookService {
  private bookRepository = AppDataSource.getRepository(Book);
  getAll(){
    //return this.bookList;
    return this.bookRepository.find();
  }
  getById(id:number){
    //const found = this.bookList.find(x=>x.id===id);
    //return found;
    return this.bookRepository.findOneBy({id});
  }
}
