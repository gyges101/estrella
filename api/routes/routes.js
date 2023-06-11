require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const Model = require('../model/model');
const mongoose = require('mongoose');
const uploadFile = require('../middleware/upload');
const fs = require('fs');
const path = require('path');
const uploadPathFolder = path.dirname(require.main.filename);
const { SECRETHASH = "secret" } = process.env;
const mongoString = process.env.DB_HOST;
const database = mongoose.connection;

mongoose.connect(mongoString);

// Connection Mongodb Error Event
database.on('error', (error) => {
    console.log(error)
})

// Connection Mongodb Event
database.once('connected', () => {
    console.log('Database Connected');
})


router.post('/addRemarque', async (req, res) => {

})


module.exports = router