const {
    readFile,
    writeFile
} = require("fs")

const { promisify } = require("util")

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor() {
        this.NOME_ARQUIVO = "herois.json"
    }

    // outra forma para ler arquivos JSON é:
    // const dadosArquivo = require("./herois.json")
    async obterDadosArquivo() {
        // para poder usar o await a gente tem que passar o async antes
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf8")
        return JSON.parse(arquivo.toString())
    }

    async escreverDadosArquivo(herois) {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(herois), "utf8")
        return true
    }

    async cadastrar(novoHeroi) {
        const herois = await this.obterDadosArquivo()
        var quantidadeHerois = herois.length

        novoHeroi.id = ++quantidadeHerois
        herois.push(novoHeroi)

        await this.escreverDadosArquivo(herois)

        return novoHeroi
    }

    async listar(id) {
        const dadosArquivo = await this.obterDadosArquivo()
        const dadosFiltrados = dadosArquivo.filter((heroi) => {
            if (id)
                return heroi.id === id
            else
                return true
        })
        return dadosFiltrados
    }

    async deletar(id) {
        const herois = await this.obterDadosArquivo()
        const heroisAtualizados = herois.filter(heroi => heroi.id !== id)
        await this.escreverDadosArquivo(heroisAtualizados)
        return true
    }

    async atualizar(id, heroiAtualizado) {
        const herois = await this.obterDadosArquivo()
        const indice = herois.findIndex(heroi => heroi.id == id)
        const heroi = herois.find(heroi => heroi.id == id)
        if(!indice){
            heroiAtualizado.id = heroi.id
            herois.splice(indice, 1, heroiAtualizado)
        }
        else
            throw Error("O indice indicado não existe")
        this.escreverDadosArquivo(herois)
        return heroiAtualizado
    }
}

module.exports = new Database()