const express = require("express");

const project = express.Router();

const Project= require("../models/project")

project.get("/", (req, res) => {
  res.render('Index', 
  {
    project: Project
  });
});

// New
project.get('/new', (req, res)=>{
  res.send('New')
})

// Edit
project.get('/:indexArray/edit',(req,res)=>{
  res.render('Edit',{
    project:Project[req.params.indexArray],
    index:req.params.indexArray
  })
})

// Update
project.put('/arrayIndex', (req,res)=>{
  if(req.body.hasDatabase === "on"){
    req.body.hasDatabase = 'true'
  }else{
    req.body.hasDatabase = 'false'
  }
  Project[req.params.arrayIndex] = res.body
  res.redirect(`/project/${req.params.arrayIndex}')
}`)

// show as json
// project.get('/:arrayIndex', (req, res)=>{
//   res.send(Project[req.params.arrayIndex])
// })

// show as html
project.get("/:arrayIndex", (req, res) => {
  if(Project[req.params.arrayIndex]){
  res.render('Show', 
  {
    entry: Project[req.params.arrayIndex]
  });
}else{
  res.send("Not found, go back!")
}
});

// Post
project.post('/', (req,res)=>{
  console.log(req.body)
  if(req.body.hasDatabase === 'on'){
      req.body.hasDatabase ='true'
  }else{
    req.body.hasDatabase ='false'
  }

  Project.push(req.body)
  // res.send(Project)
    res.redirect('/project')
})

module.exports = project;
