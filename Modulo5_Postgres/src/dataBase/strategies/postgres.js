const ICrud = require("./interfaces/ICrud");
const Sequelize = require("sequelize")

class Postgres extends ICrud {
    constructor() {
        super()
        this._sequelize = null
        this._herois = null
    }

    async connect() {
        this._sequelize = new Sequelize(
            "herois",
            "ed_arias",
            "12345",
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )
        await this.defineModel()
        return this._sequelize
    }

    async defineModel() {
        this._herois = this._sequelize.define(
            "herois",
            {
                id: {
                    type: Sequelize.INTEGER,
                    required: true,
                    primaryKey: true,
                    autoIncrement: true
                },
                nome: {
                    type: Sequelize.STRING,
                    required: true
                },
                poder: {
                    type: Sequelize.STRING,
                    required: true
                }
            },
            {
                tableName: "tb_herois",
                freezeTableName: false,
                timestamps: false
            }
        )
        await this._herois.sync()
        return this._herois
    }

    async isConnected() {
        try {
            await this._sequelize.authenticate()
            return true
        } catch (error) {
            console.error("Não foi possivel se conectar", error);
            return false
        }
    }

    async create(item) {
        try {
            const { dataValues } = await this._herois.create(item)
            return dataValues
        } catch (error) {
            console.error("Não foi possivel create", error);
        }
    }

    async read(query) {
        const { dataValues } = await this._herois.findAll()
        return dataValues
    }
}

module.exports = Postgres