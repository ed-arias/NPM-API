const { obterPessoas } = require("./service")

main()
async function main() {
    try {
        const {results} = await obterPessoas("a")
        const pesos = results.map(pessoa => parseInt(pessoa.mass))
        const pesosFiltrados = pesos.filter(peso => !isNaN(peso))
        const somaDosPesos = pesosFiltrados.reduce((acumulador, valorAtual) => acumulador + valorAtual)

        console.log("Peso total", somaDosPesos)
    } catch (error) {
        console.error("Deu ruim", error)
    }
}