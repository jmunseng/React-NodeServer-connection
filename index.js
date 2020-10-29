const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const Task = require("./models/Task");
const mongoose = require("mongoose")
const cors = require("cors")



const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())


// mongoose
mongoose.connect("mongodb://localhost:27017/lastTaskDB", {useNewUrlParser: true, useUnifiedTopology: true})



//submit route
app.post('/submit', (req,res)=>{
  
  const task = new Task({
      task: req.body.task,
      title: req.body.title,
      describe: req.body.describe,
      expireDate: req.body.expireDate,
      content: req.body.content,
      condition: req.body.condition,
      reward: req.body.reward,
      number: req.body.number
    });
    task.save()
    .catch((err) => console.log(err));
    res.json(('saved to db: ' + task));
    
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, (req,res)=>{
    console.log(" 3000 Server is running successfullly!")
})
