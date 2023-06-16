require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');


const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json());

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})