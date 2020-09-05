const ContextStrategy = require("./dataBase/strategies/patterns/contextStrategy")
const MongoDB = require("./dataBase/strategies/mongoDB")
const Postgres = require("./dataBase/strategies/postgres")
const PostgresExemplo = require("../postgresExemplo")

// const contexMongo = new ContextStrategy(new MongoDB())
// contexMongo.create()

main()
async function main() {
    const contexPostgres = new ContextStrategy(new Postgres())
    await contexPostgres.connect()
    const isConnected = await contexPostgres.isConnected()
    console.log("isConnected", isConnected)
    // const result = await contexPostgres.create({
    //     nome:"Lanterna verde",
    //     poder:"Aquatico"
    // })
    // console.log("result", result)

    const list = await contexPostgres.read()
    console.log("list", list)
}
