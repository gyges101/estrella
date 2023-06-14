require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');


const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    origin: 'http://localhost:4300'
}));

app.use(express.json());

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})