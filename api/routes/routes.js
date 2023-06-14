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


// Singup View 
router.post('/addUser', async (req, res) => {
    var userInstance = new Model.Users({
        role: req.body.role,
        email: req.body.email,
        password: req.body.password
    })
    
    try {
        const savedData = await userInstance.save();
        res.status(200).json(savedData)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete('/userdelete:id', async(req, res) => {

    let id = req.params.id
    id = id.replace(":", "")
    
    try{
        const data = await Model.Users.deleteOne({_id: id})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router