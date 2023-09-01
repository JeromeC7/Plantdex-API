import { Request,Response } from "express";
import { PlanteService } from "../services/PlanteService";

export class PlanteController{
    private planteService = new PlanteService();

    async getAllPlants(req: Request,res: Response){
        //const allPlants = this.PlantService.getAll();
        const allPlants = await this.planteService.getAll();
        res.send({status: "OK", data: allPlants});
    }

    async getPlantById(req: Request, res: Response){
        const id = Number(req.params.id);
        const Plant = await this.planteService.getById(id);
        if (!Plant) {
        res.status(404).send({
            status: "FAILED",
            message: `Le livre avec l'id ${id} n'existe pas...`,
        });
        return;
        }
        res.send({ status: "OK", data: Plant });
    }

    async create(req: Request, res: Response){
        console.log("Test headers", req.headers.authorization);
        
        const body = req.body;
        const createPlant = await this.planteService.create(body.id,body.nom,body.soleil,body.arrosage,body.categorie,body.image);
        res.send({status: "OK",date: createPlant});
    }

    async update(req: Request, res: Response){
        const id = Number(req.params.id);
        const body = req.body;
        const updatedPlant = await this.planteService.update(id, body.nom);
        if (!updatedPlant) {
        res.status(404).send({
            status: "FAILED",
            message: `Le livre avec l'id ${id} n'existe pas...`,
        });
        return;
        }
        res.send({ status: "OK", data: updatedPlant });
    }

    async delete(req: Request, res: Response){
        const id = Number(req.params.id);
        await this.planteService.delete(id);
        res.send({ status: "OK" });
    }
}