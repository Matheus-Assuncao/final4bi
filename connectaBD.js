const mysql = require('mysql2');

const con = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bd_attfinal'
})

con.connect(err=>{
    if(err) throw err
    console.log("Conectado!")
})

module.exports = con;