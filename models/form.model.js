// models/form.model.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  dob: { type: Date, required: true },
  favoriteSports: { type: [String], required: true },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
