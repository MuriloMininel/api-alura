const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')

conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        const app = customExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }

})


