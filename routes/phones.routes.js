const express = require('express');
const router = express.Router();
const phoneData = require('../data/phones.json');

router.get('/', async (req, res) => {
    res.status(200).json(phoneData);
/*     phoneData
    .find(req.params)
    .then(phones => {
        console.log(phones);
        res.send('phones', { phones });
    })
    .catch(error => {
        console.log('error')
    }); */
  /*   res.send(JSON.parse(phoneData))
    console.log(phoneData) */
});

router.get('/:id', async (req, res) => {
    const phoneData_id = req.params.id
    /* console.log(phoneData_id) */
    const details = phoneData.find(item => item.id == req.params.id);
    res.status(200).json(details)
});


module.exports = router;