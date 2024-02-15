// routes/form.js

const router = require("express").Router();
let Form = require("../models/form.model");

router.route("/").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const dob = Date.parse(req.body.dob);
  const favoriteSports = req.body.favoriteSports;

  const newForm = new Form({
    name,
    age,
    dob,
    favoriteSports,
  });

  newForm
    .save()
    .then(() => res.json("Form submitted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
