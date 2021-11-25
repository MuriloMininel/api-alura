const atendimentos = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        return atendimentos.lista(res);})

    app.get('/atendimentos/:id', (req,res) =>{
        const id = parseInt(res.params.id);
        atendimentos.buscaPorId(id,res)
    } )

    app.get('/atendimentos/:cliente', (req, res) =>{
        const nomeDoCliente = res.params.cliente;
        Atendimento.buscaPorNomeDoCliente(nomeDoCliente, res)
    })
    app.post('/atendimentos', (req, res) =>{
        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res);
        ;
    })
    app.patch('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id,res)
    })
}
