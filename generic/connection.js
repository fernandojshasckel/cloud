const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('cloud', 'root', 'a9d9p8.E10', {
    host: 'localhost',
    dialect: 'mysql'
}) 

//Teste para ver se deu certo a conexão
sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso ao banco de dados")
}).catch(function(erro){
    console.log("Erro ao realizar conexão com o banco de dados")
    console.log("Erro causado: " + erro)
})