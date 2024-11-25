//Colocando as dependências dentro de uma variável.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Usando Express
const app = express();

// Configurando a pasta pública para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Usando BodyParser para facilitar o processamento dos dados do formulário
app.use(bodyParser.urlencoded({extended: true}));

//ROTAS
const routes = require('./routes');
app.use(routes)

//Usando o servidor
app.listen(8080);
console.log('Usando porta 8080');
