/*
October 11, 2021

KYGM Services LLC 

Sales Application for Francisco & Shauna Gutierrez

Database: MongoDB
API Framework: Node.JS
UI Framework: Handlebars
Security System: BycryptJS
Deployment Method: Heroku

This application is to help Francisco and Shauna sell 
clothing and other related items. 

*/


const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = process.env.PORT || 1550;

app.get('/getData', (req, res) => {
try{

}
catch{

}
});

app.post('/sendData', (req, res) => {
try{

}
catch{

}
});


app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});