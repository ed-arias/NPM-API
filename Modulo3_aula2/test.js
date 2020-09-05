const {
    deepEqual,
    ok
} = require("assert")

const database = require("./database")

const DEFAULT_ITEM_CADASTRAR = {
    id: 1,
    nome: "Flash",
    poder: "Speed"
}

const NOVO_ITEM_CADASTRAR = {
    id: 2,
    nome: "Batman",
    poder: "Dinheiro"
}

const NOVO_ITEM_SEM_CADASTRAR = {
    nome: "Batman",
    poder: "Dinheiro"
}

const NOVO_ITEM_ATUALIZAR = {
    nome: "Lanterna verde",
    poder: "Energia do Anel"
}

const DEFAULT_ITEM_ATUALIZADO = {
    id: 1,
    nome: "Lanterna verde",
    poder: "Energia do Anel"
}

describe("Suite de manipulação de Heróis", () => {

    it("deve pesquisar um herói usando arquivos", async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [heroi] = await database.listar(1)
        deepEqual(heroi, expected)
    })

    it("deve cadastrar um herói usando arquivos", async () => {
        const expected = NOVO_ITEM_CADASTRAR
        const heroi = await database.cadastrar(NOVO_ITEM_SEM_CADASTRAR)
        deepEqual(heroi, expected)
    })

    it("deve remover um herói dos arquivos", async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        await database.deletar(2)
        const [herois] = await database.listar()
        deepEqual(herois, expected)
    })

    it("deve atualizar um herói por ID dos arquivos", async () => {
        const expected = DEFAULT_ITEM_ATUALIZADO
        const heroi = await database.atualizar(1, NOVO_ITEM_ATUALIZAR)
        deepEqual(heroi, expected)
    })
})