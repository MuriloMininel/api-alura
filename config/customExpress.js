const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


module.exports = () => {

    const app = express()

    //pedindo para o app usar algumas requisições
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //npm install consign organização ok
    consign()
        .include('controllers')
        .into(app)

    return app
}