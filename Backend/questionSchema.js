const mongoose = require("mongoose")
const { Schema } = mongoose;

const questionSchema = new Schema({
  questionTitle:  String,
  questionDescription: String,
  answers:   [{name: String, text: String}]
});

module.exports = mongoose.model("Questions", questionSchema)

/* {
  questionTitle: "Do you recommend React.js?",
  questionDescription:"I consider learning it, would anyone recommend it?",
  answers: [{
      name: "Teszt Elek",
      text: "Yes I would, it's a very popular currently."
  }]
} */