const Commander = require("commander")
const Database = require("./database")
const Heroi = require("./heroi")

main()
async function main(params){
    Commander
        .version("v1")
        .option("-n, --nome [value]", "Nome do herói")
        .option("-p, --poder [value]","Poder do herói")
        .option("-i, --id [value]","Id do herói")
        .option("-c, --cadastrar [value]","Cadastrar um novo herói")
        .option("-l, --listar [value]","Listar um herói")
        .option("-r, --remover [value]","Remover um herói")
        .parse(process.argv)

    const heroi = new Heroi(Commander)
    try {
        if(Commander.cadastrar){
            const novoHeroi = await Database.cadastrar(heroi)
            if(!novoHeroi){
                throw Error("Herói não foi cadastrado")
                return
            }
            console.log(novoHeroi)
        }

        if(Commander.listar){
            const herois = await Database.listar(parseInt(heroi.id))
            console.log(herois)
        }

        if(Commander.remover){
            const remove = await Database.deletar(parseInt(heroi.id))
            console.log(remove)
        }
    } catch (error) {
        console.error("Deu ruim", error);
    }
}