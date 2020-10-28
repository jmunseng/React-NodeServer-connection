const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const User = require("./models/User");
const mongoose = require("mongoose")
const cors = require("cors")



const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())


// mongoose
mongoose.connect("mongodb://localhost:27017/deakinDB", {useNewUrlParser: true, useUnifiedTopology: true})


//home route
app.get ('/', (req, res)=>{
  const user = {
        username: "deakin",
        password : "sit313",
  }
  res.send(user)
})

//register route
app.post('/register', (req,res)=>{
  
  const user = new User({
    username: req.body.username,
    password: req.body.password
    });
    user.save()
    .catch((err) => console.log(err));
    res.json(('saved to db: ' + user));
    
})

//login route
app.post('/login', (req,res)=>{
    User.findOne({ username: req.body.username},(error,user)=>{
      if(user!= null){
          if(!user.password.localeCompare(req.body.password)){
              res.json('success');
          }
          else{
              res.json('Password is wrong!')
          }
      }else{
        res.json('Username is not registered!')
      }
  });
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfullly!")
})
