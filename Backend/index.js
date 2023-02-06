const express = require("express")
const app = express()
const Mongoose = require("mongoose")
app.use(express.json())
const Questions = require("./questionSchema")
const cors = require('cors')
app.use(
    cors({
        origin: "*"
    })
)


app.get('/', async (req, res) => {
    const questions = await Questions.find({});
    res.json(questions);
    console.log("Returning all the data");
})

app.post('/', async (req, res) => {
    try {
        const newQuestion = req.body;
        const questions = await Questions.create(newQuestion);
        //res.json(questions);
        console.log("New question created");
        res.json({message: "Correct"});
    } catch (e) {
        console.log(e.message)
        res.json({message: "Incorrect"});
    }
})

app.get('/list', async (req, res) => {
    const questions = await Questions.find({});
    res.json(questions);
    console.log("Returning all the data");
})

app.post('/list/one', async (req, res) => {
    const question = await Questions.findOne({questionTitle: req.body.name});
    res.json(question);
    console.log("Returning one result");
    console.log(question);
})









//Connect to DB and start the app on port:3000
Mongoose.connect("mongodb://0.0.0.0:27017/questions_and_answers").then(() => {
    console.log("MongoDB connection established!");
    app.listen(3001, ()=> {
        console.log("Backend running on port: 3001!");
    })
}).catch((error) => {
    console.log("Attempt to connect to MongoDB FAILED!");
    console.log(error);
})
