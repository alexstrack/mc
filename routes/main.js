"use strict"

const router = require('express').Router();

router.get('/', function(req, res){
    res.send('It works!');
});

module.exports = router;