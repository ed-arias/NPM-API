const assert = require("assert")
const Postgres = require("../dataBase/strategies/postgres")
const DataBaseStrategy = require("../dataBase/strategies/patterns/contextStrategy")
const PostgresExemplo = require("../../postgresExemplo")

const dataBaseStrategy = new DataBaseStrategy()
const postgres = new Postgres()
dataBaseStrategy.setDataBaseStrategy = postgres

const MOCK_HEROI_CADASTRAR = {
    nome: "Flash",
    poder: "Velocidade"
}

describe("Postgres strategy", () => {

    before(async () => {
        await postgres.connect()
    })

    it("Postgres connection test", async () => {
        const results = await dataBaseStrategy.isConnected()
        assert.strictEqual(results, true)
    })

    it("Postgres test create", async () => {
        const result = await dataBaseStrategy.create(MOCK_HEROI_CADASTRAR)
        delete result.id
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })

    // it("postgres test read", async () => {
    //     const result = await context.read()
    //     console.log("result", result);
    //     assert.ok(result)
    // })
})