"use strict"

const router = require('express').Router();

router.get('/', function(req, res){
    res.render('index.ejs');
});

router.post('/inscrever', function(req,res){
    //fazer a conexão com a API do mailchimp
});

module.exports = router;