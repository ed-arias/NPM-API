const axios = require("axios")
const URL = "https://swapi.dev/api/people"

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const pessoas = await axios.get(url)
    return pessoas.data
}

/*obterPessoas("a")
    .then(function (pessoas){
        console.log("pessoas", pessoas)
    })
    .catch(function (error){
        console.log("Deu ruim trazendo as pessoa")
    })*/

module.exports = {
    obterPessoas
}