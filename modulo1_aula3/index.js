/**
 * 0. Obter um usuario
 * 1. Obter o numero de telefone pelo Id de usuario
 * 2. Obter o endereço pelo Id do usuario
 */

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            telefone: '999372173',
            ddd: '22'
        })
    }, 2000);
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

/*function resolverUsuario(erro, usuario){
    console.log('usuario', usuario);
}*/

obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error("Deu ruim em usuario", error);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error("Deu ruim no telefone", error1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error("Deu ruim no endereço", error1);
                return;
            }

            console.log(
                `
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua} No. ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
                `
            )
        })
    })
})
// const telefone = obterTelefone(usuario.id);

/*
    O console.log() é executado antes que as funções obterUsuario() e obterTelefone()
    por causa do setTimeout()
*/

//console.log('telefone', telefone);