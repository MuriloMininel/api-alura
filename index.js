const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const tabelas = require('./infra/tabelas')

conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        tabelas.init(conexao)

        const app = customExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }

})


