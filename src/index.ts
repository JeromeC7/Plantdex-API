import express, { Request, Response } from "express";

import bookRouter from "./routers/BookRouter";
import AppDataSource from "./data-source";

AppDataSource.initialize().then(() => {
  const app = express();

  //Permet à notre API d'accepter des données en entrée en json
  app.use(express.json());

  // rediriger les requêtes de localhost:3000/api/books
  app.use("/api/books", bookRouter);

  app.listen(3000, () => {
    console.log("Application correctement lancée sur le port 3000");
  });
});