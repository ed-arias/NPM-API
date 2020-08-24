const EventEmitter = require("events")
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = "usuario:click"
meuEmissor.on(nomeEvento, function (click) {
    console.log("Um usuario clickou", click)
})

// Aplicacion de console
const stdin = process.openStdin()
stdin.addListener("data", function (value) {
    console.log(`Você digitou: ${value.toString()}`)
})

// 
// meuEmissor.emit(nomeEvento, "na barra de rolagem")
// meuEmissor.emit(nomeEvento, "no OK")

// let count = 0;
// setInterval(function (){
//     meuEmissor.emit(nomeEvento, "no OK "+(count++))
// }, 1000)