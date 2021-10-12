//The following packages are required for API and UI operations
const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());
const mongoose = require('mongoose');
const helpers = require('handlebars-helpers');