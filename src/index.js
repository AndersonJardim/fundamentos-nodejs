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
app.get("/", (request, response) => {
    return response.json("Hello world Ignite!");
})

app.listen(3333);