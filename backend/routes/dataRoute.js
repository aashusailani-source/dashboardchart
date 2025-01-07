const { getAllData } = require('../controllers/data.controller');
const router = require('express').Router();

router.get('/get-alldata', getAllData);

module.exports = router;