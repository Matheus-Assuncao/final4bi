const express = require('express');
const path = require('path');
const route = express.Router();

//importando BD
//const conn = require('./connectaBD');


//NavBar
route.get('/produtos',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/views/forms.html'))
})

route.get('/trabalhos', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/views/trabalhos.html'))
})

//HomePage
route.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
})

route.post('/contato',(req,res)=>{
    const {nome,sobrenome,mensagem} = req.body;
    let sql = 'INSERT INTO user_tb(user,lastName,message) values(?,?,?)';
    conn.query(sql,[nome,sobrenome,mensagem],(err,resultado)=>{
        if (err) throw err;
        console.log('Mensagem enviada')
        res.send('Mensagem enviada!')
    })
})

//Materias
route.get('/CN',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/views/materias/natureza.html'))
})

route.get('/CH',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/views/materias/humanas.html'))
})

route.get('/mat',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/views/materias/matematica.html'))
})

route.get('/ling',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/views/materias/linguagens.html'))
})

//Rota produtos
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