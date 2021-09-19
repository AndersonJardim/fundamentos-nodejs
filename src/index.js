const { request, response } = require('express');
const express = require('express');

const app = express();

//localhost:3031
//localhost:3333
//localhost:3333/ignite

//formato NORMAL
//app.get("/", (request, response) => {
//    return response.send("Hello world!");
//})

//formato JSON

//GET
app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

//POST
app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

//PUT
app.put("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

//PATCH
app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 7", "Curso 3", "Curso 4"])
})

//DELETE
app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 4"]);
})

/**
 * GET    = Buscar  uma informação dentro do servidor
 * POST   = Inserir uma informação no servidor
 * PUT    = Alterar uma informação no servidor
 * PATH   = Alterar uma informação especifica
 * DELETE = Deletar uma informação no servidor
*/

app.listen(3333);
