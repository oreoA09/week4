const express = require("express");

const project = express.Router();

const Project= require("../models/project")

project.get("/", (req, res) => {
  res.render('Index', 
  {
    project: Project
  });
});

// show as json
// project.get('/:arrayIndex', (req, res)=>{
//   res.send(Project[req.params.arrayIndex])
// })

// show as html
project.get("/:arrayIndex", (req, res) => {
  res.render('Show', 
  {
    entry: Project[req.params.arrayIndex]
  });
});


module.exports = project;
