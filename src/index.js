const express = require('express');

const app = express();

//localhost:3031
//localhost:3333
//localhost:3333/ignite

app.get("/", (request, response) => {
    return response.send("Hello world!");
})

app.listen(3333);