import express, { Request, Response } from "express";

import planteRouter from "./routers/PlanteRouter";
import userRouter from "./routers/UserRouter";
import AppDataSource from "./data-source";

AppDataSource.initialize().then(() => {
  const app = express();

  //Permet à notre API d'accepter des données en entrée en json
  app.use(express.json());

  // rediriger les requêtes de localhost:3000/api/plantes
  app.use("/api/plantes", planteRouter);
  app.use("/api/users", userRouter);

  app.listen(3000, () => {
    console.log("Application correctement lancée sur le port 3000");
  });
});