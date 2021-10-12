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

//The following packages are required for API and UI operations
const handlebars = require('handlebars');
const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const helpers = require('handlebars-helpers');
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies


//Database Setup
const dbUrl = "mongodb+srv://admin:Password1@cluster.qtabs.mongodb.net/MarysAuto?retryWrites=true&w=majority";
const db = mongoose.connection;

mongoose.connect(dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

db.on('error', () => {
  console.error.bind(console, 'connection error: ');
});
db.once('open', () => {
  console.log('MongoDB Connected');
});


const PORT = process.env.PORT || 1550;

app.get('/', (req, res) => {
  try {
    res.render('index');
  }
  catch {
    return res.status(500).send("<h3>Server Error</h3>");
  }
});
app.get('/home', (req, res) => {
  try {
    res.render('index');
  }
  catch {

  }
});

app.get('/getData', (req, res) => {
  try {

  }
  catch {

  }
});

app.post('/sendData', (req, res) => {
  try {

  }
  catch {

  }
});


app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});