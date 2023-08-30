import express, { Request, Response } from "express";

import planteRouter from "./routers/PlanteRouter";
import userRouter from "./routers/UserRouter";
import AppDataSource from "./data-source";
import cors from "cors";

AppDataSource.initialize().then(() => {
  const app = express();

  //const cors = require('cors');

  // Activer CORS pour toutes les routes
  app.use(cors());

  //Permet à notre API d'accepter des données en entrée en json
  app.use(express.json());

  // rediriger les requêtes de localhost:3000/api/plantes
  app.use("/api/plantes", planteRouter);
  app.use("/api/users", userRouter);

  app.listen(3000, () => {
    console.log("Application correctement lancée sur le port 3000");
  });
});

// Ou configurer CORS avec des options spécifiques si nécessaire
// app.use(cors({
//   origin: 'http://frontend-domain.com',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

