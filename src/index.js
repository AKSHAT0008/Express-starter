const express = require('express')
const config = require('./config/config.js');
const DBconnect = require('./config/dbConfig.js');
// const bodyParser = require("body-parser")
const app= express();

app.use(express.json())
app.use(express.text())
app.post("/ping",(req,res)=>{
    console.log(req.body);
    
    return res.json({message:"pong"});
})




app.listen(config.PORT,async ()=>{
    await DBconnect();
    console.log("Server started at PORT"+config.PORT);
  
})






//write it in package.json under scripts and to start server use cmd "npm start"
//"start": "npx nodemon src/index.js"

