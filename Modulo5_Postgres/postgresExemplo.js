const Sequelize = require("sequelize")


class PostgresExemplo {
    constructor(){
        this._sequelize = null
    }
    async connect(){
        this._sequelize = new Sequelize(
            "herois",
            "ed_arias",
            "12345",
            {
                host: 'localhost',
                dialect: 'postgres'
            }
        )
    }
    async testConnection() {
        try {
            await this._sequelize.authenticate();
            return true
        } catch (error) {
            console.error("Não foi possivel se conectar", error);
            return false
        }
    }

    async closeConnection() {
        try {
            await this._sequelize.close()
            return true
        } catch (error) {
            console.error("Não foi possivel fechar a conexão");
            return false
        }
    }
}

module.exports = PostgresExemplo