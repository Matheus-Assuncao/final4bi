const express = require('express');
const path = require('path');
const route = express.Router();

//importando BD
const conn = require('./connectaBD');


//HomePage
route.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
})

route.get('/produtos',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/views/forms.html'))
})

route.get('/trabalhos', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/views/trabalhos.html'))
})

//Rota formulário
route.post('/pedido',(req,res)=>{
    const { produto, qtd } = req.body;
    let sql = 'INSERT INTO order_tb (objName,qtd) values(?,?)';
    conn.query(sql,[produto,qtd],(err,resultado)=>{
        if(err) throw err;
        console.log(`Pedido ${produto} salvo no BD`)
        res.send("Pedido realizado com sucesso!")
    })
})



//Exportando nossas rotas
module.exports = route;