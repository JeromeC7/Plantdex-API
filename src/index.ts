import express from "express";

const app = express();

const booklist= [
    {
    id: 1,
    title: "The Hobbit",
    },
    {
        id: 2,
        title: "The Lord of the Rings",
    },
    {
        id: 3,
        title: "The Silmarillion",
    },
    {
        id: 4,
        title: "The Children of Hurin",
    },
    {
        id: 5,
        title: "The Fall of Gondolin",
    }
]

app.get('/hello', (request,response)=>{
    console.log('Hello');
    response.send('Hello voici ta réponse');
});

app.get('/api/books', (request,response)=>{
    console.log(booklist);
    response.send({status: "OK", data: booklist});
});

app.listen(3000, ()=>{
    console.log("Application correctement lancée sur le port 3000");
});