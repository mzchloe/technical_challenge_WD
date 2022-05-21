const express = require('express');
const router = express.Router();
const phoneData = require('../data/phones.json');

//route to get all phones
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

//route to get one specific phone
router.get('/:id', async (req, res) => {
    const phoneData_id = req.params.id
    /* console.log(phoneData_id) */
    const details = phoneData.find(item => item.id == req.params.id);
    res.status(200).json(details)
});


module.exports = router;