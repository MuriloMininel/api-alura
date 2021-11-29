const conexao = require('../infraestrutura/conexao')
class atendimento {

    adiciona(atendimento){
        const sql = "INSERT INTO atendimento SET ?"

        conexao.query(sql, atendimento, (erro)=> {
            if(erro) {
                console.log(erro)
            } else{
                console.log(resultados)
            }

        })
    }

}

module.exports = new atendimento