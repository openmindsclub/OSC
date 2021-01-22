const Sujet_Model = require('./Model.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// express app
const app = express();
var corsOptions={ origin:"http://localhost:8081"}
// parse requests content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// parse requests type json
app.use(bodyParser.json())

 app.get('/',(req,res)=>
 {
     res.json({"message":"hello to OSC API"});
 });
 // listen for request
 app.listen(3000,()=>
 {
     console.log("RUNNINGGGGGGGG ON 3000");
 });
 app.get('/Sujets')
// Sujet_Model.insertMany({
//     name:"Base de donnee"
// });