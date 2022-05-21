const express = require('express');
const router = express.Router();


const phoneData = require('../data/phones.json');

router.get('/phones', (req, res) => {
    res.send(JSON.parse(phoneData))
})

module.exports = router;