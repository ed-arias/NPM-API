/**
 * 0. Obter um usuario
 * 1. Obter o numero de telefone pelo Id de usuario
 * 2. Obter o endereço pelo Id do usuario
 */

 const util = require("util")
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

const usuarioPromise = obterUsuario()
usuarioPromise
    .then(function (usuario){
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(telefone){
                return {
                    usuario: usuario,
                    telefone: telefone
                }
            })
    })
    .then(function (resultado){
        return obterEnderecoAsyc(resultado.usuario.id)
            .then(function resolverEndereco(endereco){
                return {
                    usuario: resultado.usuario,
                    telefone: resultado.telefone,
                    endereco: endereco
                }
            })
    })
    .then(function (resultado){
        console.log(
            `
            Nome: ${resultado.usuario.nome}, 
            Data de nascimento: ${resultado.usuario.dataNascimento},
            Endereço: ${resultado.endereco.rua} No. ${resultado.endereco.numero},
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            `
        )
    })
    .catch(function (error){
        console.error("Deu ruim", error)
    })

// obterUsuario(function resolverUsuario(error, usuario){
//     if(error){
//         console.error("Deu ruim em usuario", error);
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error("Deu ruim no telefone", error1);
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.error("Deu ruim no endereço", error1);
//                 return;
//             }

//             console.log(
//                 `
//                 Nome: ${usuario.nome},
//                 Endereço: ${endereco.rua} No. ${endereco.numero},
//                 Telefone: (${telefone.ddd}) ${telefone.telefone}
//                 `
//             )
//         })
//     })
// })

