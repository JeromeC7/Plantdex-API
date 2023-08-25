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
  create(newTitle: string){
    const newBook = this.bookRepository.create({
      titre: newTitle,
    })
    return this.bookRepository.save(newBook);
  }
  async update(id:number, titleToUpdate: string){
    const bookToUpdate = await this.getById(id);
    if(!bookToUpdate){
      return null;
    }
    bookToUpdate.titre = titleToUpdate;
    return this.bookRepository.save(bookToUpdate);
  }
   async delete(id:number){
    const bookToDelete = await this.getById(id);
    if(!bookToDelete){
      return null;
    }
    return this.bookRepository.delete(bookToDelete);
  }
}
