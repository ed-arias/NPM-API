const ContextStrategy = require("./dataBase/strategies/patterns/contextStrategy")
const MongoDB = require("./dataBase/strategies/mongoDB")
const Postgres = require("./dataBase/strategies/postgres")
const PostgresExemplo = require("./")

const contexMongo = new ContextStrategy(new MongoDB())
contexMongo.create()
const contexPostgres = new ContextStrategy(new Postgres())
contexPostgres.create()

//const PostgresExemplo = new 