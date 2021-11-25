require('dotenv').config()

const mysql = require('mysql2');

const conexao = mysql.createConnection({

    host: process.env.HOSTNAME_BD,
    port: 3306,
    user: process.env.LOGIN_BD,
    password: process.env.SENHA_BD,
    database: process.env.BANCO_DE_DADOS

});

module.exports = conexao;

