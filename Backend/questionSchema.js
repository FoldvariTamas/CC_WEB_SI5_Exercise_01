const mongoose = require("mongoose")
const { Schema } = mongoose;

const questionSchema = new Schema({
  questionTitle:  {type: String, required: true},
  questionDescription: {type: String, required: true},
  answers:   [{name: {type: String, required: true}, text: {type: String, required: true}}]
});

module.exports = mongoose.model("Questions", questionSchema)