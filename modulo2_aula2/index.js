const service = require("./service")

main()
async function main() {
    try {
        const pessoas = await service.obterPessoas("a")
        listarPessoasComFor(pessoas)
        listarPessoasComForIn(pessoas)
        listarPessoasComForOf(pessoas)
    }
    catch (error) {
        console.error("Erro interno", error)
    }
}

function listarPessoasComForOf(pessoas){
    console.time("for of")
    for (let pessoa of pessoas.results) {
        console.log(`Nome: ${pessoa.name}`)
    }
    console.timeEnd("for of")
}

function listarPessoasComForIn(pessoas){
    console.time("for in")
    for (let i in pessoas.results) {
        const pessoa = pessoas.results[i]
        console.log(`Nome: ${pessoa.name}`)
    }
    console.timeEnd("for in")
}

function listarPessoasComFor(pessoas) {
    console.time("for")
    for (let i = 0; i < pessoas.results.length; i++) {
        const pessoa = pessoas.results[i]
        console.log(`Nome: ${pessoa.name}`)
    }
    console.timeEnd("for")
}