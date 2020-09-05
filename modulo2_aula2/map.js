const service = require("./service")

Array.prototype.meuMap = function (callback){
    const novoArrayMapeado = []
    for(let indice = 0; indice < this.length; indice++){
        const pessoa = callback(this[indice], indice)
        novoArrayMapeado.push(pessoa)
    }
    return novoArrayMapeado
}

main()
async function main() {
    try {
        const pessoas = await service.obterPessoas("a")

        // Chamada com função anónima
        // const nomes = pessoas.results.map(function (pessoa){
        //     return pessoa.name
        // })

        // Chamada com lambda
        // const nomes = pessoas.results.map(pessoa => pessoa.name)
        // console.log("nomes", nomes)

        const nomes = pessoas.results.meuMap(
            (pessoa, indice) => `[${indice}] ${pessoa.name}`
        )
        console.log("nomes", nomes)

    } catch (error) {
        console.error("Deu ruim", error)
    }
}