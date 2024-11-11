const express = require('express');
const path = require('path');
const route = express.Router();

//Rota inicio
route.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
})

route.get('/produtos',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/html/forms.html'))
})



//Exportando nossas rotas
module.exports = route;