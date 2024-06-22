const mongoose = require ('mongoose')
require('dotenv').config()

async function conectaBancoDeDados () {
    try {  
          console.log(' conexão com o Banco de daos iniciou')
    
        await mongoose.connect(process.env.MONGO_URL)
    
        console.log('Conexão com Banco de Dado feita com Sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados