const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const todoRoutes = express.Router();

let Todo = require('./model/model')

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/todo', { useNewUrlParser: true,useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/todo',todoRoutes); //This router acts as a middleware and will take control of request starting with path /todo:

todoRoutes.get('/',(req,res)=>{
    Todo.find((err,todo)=>{
        if(err){
            console.log(err)
            return "error" + err
        }else{
            console.log(todo)
            return res.json(todo)
        }
    });
})

todoRoutes.get('/:id',(req,res)=>{
    let id = req.params.id;
    Todo.findById(id,(err,todo)=>{
        if(err){
            return "error" + err
        }else{
            return res.json(todo)
        }
    })
})

// todoRoutes.post('/add',(req,res)=>{
//     const todo = new Todo(req.body)
//     todo.save()
//         .then(todo => res.status(200).json({'todo': "Todo added successfully"}))
//         .catch(err => res.status(400).send('failed..... no todo added'))
// })
todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    console.log(req.body)
    todo.save()
         .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.post('/update/:id',(req,res)=>{
    Todo.findById(req.param.id,(err,todo)=>{
        if(!todo){
            res.status(400).send("not found .... todo not present")
        }else{
            todo.title = req.body.title
            todo.description = req.body.description

            todo.save()
                .then(todo => res.json('Todo Updated'))
                .catch(err => res.send("todo did not update"))
        }
    })
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


