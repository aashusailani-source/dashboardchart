const { getAllData } = require('../controllers/data.controller');
const express = require('express')
const router = express.Router();

router.get('/get-alldata', getAllData);
module.exports = router;