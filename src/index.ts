import express, {Request,Response} from "express";
import * as dotenv from 'dotenv';
import bookRouter from "./routers/BookRouter";
import { AppDataSource } from './data-source';
import bodyParser = require('body-parser');
import * as path from 'path';


const app = express();

//Permet à notre API d'accepter des données en entrée en json
app.use(express.json());

app.use("/api/books",bookRouter);

// Init environment variables (see .env.local file if it doesn't exist go to README.md file)
dotenv.config({ path: '.env.local' });

AppDataSource.initialize()
  .then(async () => {
    // Express server creation
    const app = express();
    const port = process.env.PORT || 8080;

    app.use(bodyParser.json());
    // Set a static folder for assets
    app.use(
      '/assets',
      express.static(path.join(__dirname, '../public/assets'))
    );

    // Bind express server on port 3004
    app.listen(port, () => {
      console.log(
        `Express server has started on port ${port}. Open http://localhost:${port} to see results`
      );
    });
  })
  .catch((error) => console.log(error));


// const booklist= [
//     {
//     id: 1,
//     title: "The Hobbit",
//     },
//     {
//         id: 2,
//         title: "The Lord of the Rings",
//     },
//     {
//         id: 3,
//         title: "The Silmarillion",
//     },
//     {
//         id: 4,
//         title: "The Children of Hurin",
//     },
//     {
//         id: 5,
//         title: "The Fall of Gondolin",
//     }
// ]

// app.get('/hello', (request,response)=>{
//     console.log('Hello');
//     response.send('Hello voici ta réponse');
// });

// app.get('/api/books', (request,response)=>{
//     console.log(booklist);
//     response.send({status: "OK", data: booklist});
// });

// app.get("/api/books/:idVoulu", (request, response) => {
//   const paramId = Number(request.params.idVoulu);
//   console.log("idVoulu : ", request.params.idVoulu);

//    if (isNaN(paramId)) {
//     response
//       .status(400)
//       .send({ status: "FAILED", message: "L'id doit être un nombre" });
//     return;
//   }

//   const found = booklist.filter((x) => x.id === paramId);

//    if (found.length === 0) {
//     response.status(404).send({
//       status: "FAILED",
//       message: `Le livre d'id ${paramId} n'existe pas`,
//     });
//     return;
//   }

//   response.send({ status: "OK", data: found });
// });

// app.post("/api/books", (request, response) => {
//   const bookTitle = request.body.title;

//   if(bookTitle.length===0 || typeof bookTitle !== 'string'){
//     response.status(404).send({
//       status: "FAILED",
//       message: `Le titre ${bookTitle} n'est pas valide`,
//     });
//     return;
//   }

//   const newBook = {
//     id: booklist.length + 1,
//     title: bookTitle
//   };
//   booklist.push(newBook);
//   response.status(201).send({ status: "OK", data: booklist });
// });

// app.put("/api/books/:idValue", (request, response) => {
//   const paramId = Number(request.params.idValue);
//   console.log("idVoulu : ", request.params.idValue);

//    if (isNaN(paramId)) {
//     response
//       .status(400)
//       .send({ status: "FAILED", message: "L'id doit être un nombre" });
//     return;
//   }

//   const found = booklist.find((x) => x.id === paramId);

//    if (!found) {
//     response.status(404).send({
//       status: "FAILED",
//       message: `Le livre d'id ${paramId} n'existe pas`,
//     });
//     return;
//   }

//   const bookTitle = request.body.title;
//   found.title = bookTitle;

//   if(bookTitle.length===0 || typeof bookTitle !== 'string'){
//     response.status(404).send({
//       status: "FAILED",
//       message: `Le titre ${bookTitle} n'est pas valide`,
//     });
//     return;
//   }

//   response.status(201).send({ data: booklist });

// });

// app.delete("/api/books/:idValue", (request, response) => {
//   const paramId = Number(request.params.idValue);

//   if (isNaN(paramId)) {
//     response
//       .status(400)
//       .send({ status: "FAILED", message: "L'id doit être un nombre" });
//     return;
//   }

//   const found = booklist.find((x) => x.id === paramId);

//   if (!found) {
//     response.status(404).send({
//       status: "FAILED",
//       message: `Le livre d'id ${paramId} n'existe pas`,
//     });
//     return;
//   }

//   const indexBook = booklist.indexOf(found);
//   booklist.splice(indexBook,1);
//    response.status(201).send({ data: booklist });
// });

app.listen(3000, ()=>{
    console.log("Application correctement lancée sur le port 3000");
});

