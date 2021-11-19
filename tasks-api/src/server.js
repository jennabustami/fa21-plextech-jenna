const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/v1/tasks", (req, res) => {
    res.json("Hello World");
});

app.get("/v1/tasks", (req, res) => {
    res.send("Hello World");
});

app.get("/v1/tasks{id}", (req, res) => {
    res.send(req.params);
});

app.listen(port, () => console.log(`The server is listening on port ${port}`))