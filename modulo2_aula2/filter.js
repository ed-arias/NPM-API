const { obterPessoas } = require("./service")

main()
async function main() {
    try {
        const { results } = await obterPessoas("a")
               
        const familiaLars = results.filter(pessoa => nameHasString(pessoa.name, "lars"))
        const nomes = familiaLars.map(pessoa => pessoa.name)

        console.log("nomes", nomes)

    } catch (error) {
        console.error("Deu ruim", error)
    }
}

/*function nameHasString(name, subString){
    // por padrão o filter precisa retornar um booleano
    // para informar se deve manter ou remover da lista
    // false: remove da lista -> indexOf() retorna -1 se não encontar o substring
    // true: mantem na lista -> indexOf() retorna o indice no array
    
    return name.toLowerCase().indexOf(subString) !== -1
}*/

// Reescrevendo a função acima
const nameHasString = (name, subString) => {
    return name.toLowerCase().indexOf(subString.toLowerCase()) > -1
}