const express = require("express");

const app = express();
const port = 8000;
const tasks = require("./tasks");
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/v1/tasks", (req, res) => {
    const newTask = {
        title: req.body.title,
        is_completed: false,
    }

    tasks.push(newTask);
    res.json(tasks.id);
});

app.get("/v1/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/v1/tasks:id", (req, res) => {
    const found = tasks.some(task => task.id === parseInt(req.params.id));

    if(found){
    res.json(tasks.filter(task=> task.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({error: "There is no task at that id"})
    }
});

app.delete("/v1/tasks:id", (req, res) => {
    const found = tasks.some(task => task.id === parseInt(req.params.id));

    if(found){
    res.json(tasks.filter(task=> task.id !== parseInt(req.params.id)));
    } 
    res.status(204)
});

app.put("/v1/tasks:id", (req, res) => {
    const found = tasks.some(task => task.id === parseInt(req.params.id));
   if(found){
    tasks.forEach(task=> {
        if(task.id===parseInt(req.params.id)){
            task.is_completed = req.body.is_completed;
            task.title = req.body.title;
        }
    })   
    res.status(204)
   }
    else {
        res.status(404).json({error: "There is no task at that id"})
    }
});


app.listen(port, () => console.log(`The server is listening on port ${port}`))