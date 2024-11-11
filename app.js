//Colocando as dependências dentro de uma variável.
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

//Usando Express
const app = express();

// Configurando a pasta pública para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Usando BodyParser para facilitar o processamento dos dados do formulário
app.use(bodyParser.urlencoded({extended: true}));

//Conexão DB
const con = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bd_attfinal'
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
  });

//ROTAS
const routes = require('./routes');
app.use(routes)

app.post('/pedido', (req, res) => {
  const { produto, qtd } = req.body;

  const sql = 'INSERT INTO order_tb (objName, qtd) VALUES (?, ?)';
  con.query(sql, [produto, qtd], (err, result) => {
    if (err) throw err;
    console.log('Pedido salvo no banco de dados');
    res.send('Pedido realizado com sucesso!');
  });
});

//Usando o servidor
app.listen(8080);
console.log('Usando porta 8080');