const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoute')
const cors = require('cors');
require('dotenv').config();
const { dbConnect } = require('./connection/dbConnect');

app.use(express.json());
app.use(cors());
const fs = require("fs");
const path = require("path");

app.use('/api', dataRoutes)

app.get('/', (req, res) => {
    return res.send('Hello World');
});

dbConnect();
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at ${process.env.PORT}`);
});