const api = require("express").Router();
const {
  readFromFile,
  ReadAmdAppend,
  readAndAppend,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

//get method to retrieve data in db.json
api.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

api.post("/notes", (req, res) => {
  console.info(`${req.method} request received to add notes`);
  console.log(req.body);

  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      user_id: uuid(),
    };
    readAndAppend(newNote, "./db/db.json");
    res.json(`New Note Added Successfully`);
  } else {
    res.error("Error in Adding Note");
  }
});

// api.get('/notes/:user_id',(req,res)=>{
//     readFromFile('./db/db.json').then((data)=>res.json(JSON.parse(data)));
//     console.info(`${req.method} request received to get a single user_id`)

// })
module.exports = api;
