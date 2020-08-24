/**
 * 0. Obter um usuario
 * 1. Obter o numero de telefone pelo Id de usuario
 * 2. Obter o endereço pelo Id do usuario
 */

 const util = require("util");
const { time, timeEnd } = require("console");
 const obterEnderecoAsyc = util.promisify(obterEndereco)

function obterUsuario(callback) {
    //Quando der algum problema -> reject(erro)
    //Quando tudo acontecer conforme esperado -> resolve()
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    })
    
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(function() {
            return resolve({
                telefone: '999372173',
                ddd: '22'
            })
        }, 2000);
    })
    
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua:"Raimundo Correa",
            numero:"190",
            cep:"197-225"
        })
    }, 2000);
}

function imprimirNoLog(usuario, telefone, endereco){
    console.log(
        `
        Nome: ${usuario.nome}, 
        Data de nascimento: ${usuario.dataNascimento},
        Endereço: ${endereco.rua} No. ${endereco.numero},
        Telefone: (${telefone.ddd}) ${telefone.telefone}
        `
    )
}

main()
async function main(){
    try{
        console.time("medida-promise")
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsyc(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsyc(usuario.id)
        ])
        
        const telefone = resultado[0]
        const endereco = resultado[1]

        imprimirNoLog(usuario, telefone, endereco)
        console.timeEnd("medida-promise")
    }
    catch(error){
        console.error("Deu ruim", error);
    }
}