const customExpress = require('./config/customExpress')
const app = customExpress()
const conexao = require('./infra/conexao')
const tabelas = require('./infra/tabelas')
const porta = process.env.PORT || 3006

conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        tabelas.init(conexao)

        app.listen(porta, () => {
            return console.log(`servidor rodando na porta &{PORTA}`);
    })

    }

});

