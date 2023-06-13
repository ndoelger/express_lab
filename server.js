//Loading express & creating app
const express = require("express");
const path = require("path");

//Get the database
const studentDB = require("./data/students.js");

//Initialize app
const app = express();

//App configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Define root
app.get("/", function (req, res) {
  res.redirect("/students");
});

app.get("/students", function (req, res) {
  const students = studentDB.getAll();
  res.render("students/index", { students });
});

//Port 3000
app.listen(3000, function () {
  console.log("listening");
});
