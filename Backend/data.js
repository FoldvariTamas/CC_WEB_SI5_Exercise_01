const mongoose = require("mongoose")
const Questions = require("./questionSchema")

const starterData = [
    {
        questionTitle: "What is Bootsrap?",
        questionDescription:"I am confused about what it is.",
        answers: []
    },
    {
        questionTitle: "Do you recommend React.js?",
        questionDescription:"I consider learning it, would anyone recommend it?",
        answers: [{
            name: "Teszt Elek",
            text: "Yes I would, it's a very popular currently."
        }]
    },
    {
        questionTitle: "Is React.js or React.ts better?",
        questionDescription:"Not sure which one to start.",
        answers: [{
            name: "Teszt Elek",
            text: "I think React.js is still more popular than React.ts."
        },
        {
            name: "Toxic Tiffany",
            text: "React.ts is better RETARD."
        }
        ]
    }
]

mongoose.connect("mongodb://0.0.0.0:27017/questions_and_answers").then(() => {
    console.log("MongoDB connection established!");
})


function populate(data) {
    data.map(async e =>  {
       const questions = await Questions.create(e)
    } )
}
populate(starterData)