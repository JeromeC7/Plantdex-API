import { AppDataSource } from "../data-source";
import { Plante } from "../entities/Plante.entity";

export class PlanteService {
  private PlanteRepository = AppDataSource.getRepository(Plante);
  getAll(){
    //return this.PlanteList;
    return this.PlanteRepository.find();
  }
  getById(id:number){
    //const found = this.PlanteList.find(x=>x.id===id);
    //return found;
    return this.PlanteRepository.findOneBy({id});
  }
  create(newId,newNom,newSoleil,newArrosage,newCategorie,newImage){
    const newPlante = this.PlanteRepository.create({
      id: newId,
      nom: newNom,
      soleil: newSoleil,
      arrosage: newArrosage,
      categorie: newCategorie,
      image: newImage    
    })
    return this.PlanteRepository.save(newPlante);
  }
  async update(id:number, nomToUpdate: string){
    const PlanteToUpdate = await this.getById(id);
    if(!PlanteToUpdate){
      return null;
    }
    PlanteToUpdate.nom = nomToUpdate;
    return this.PlanteRepository.save(PlanteToUpdate);
  }
   async delete(id:number){
    const PlanteToDelete = await this.getById(id);
    if(!PlanteToDelete){
      return null;
    }
    return this.PlanteRepository.delete(PlanteToDelete);
  }
}
