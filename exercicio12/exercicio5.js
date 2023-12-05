const io = require('../io/io')

/*
Faça uma função que leia um número não determinado de valores
positivos e retorna a média aritmética dos mesmos. (Utilize o número -1
como critério de parada da repetição).
*/

let media = []

function calculaMedia(){
    let valor = 0
    let total = 0

    while ( valor !== -1){
        io.write('digite um numero')
        media.push(io.readInt())
        io.write('se quiser continuar digite algo diferente de -1')
        valor = io.readInt()
    }

    for (let controle = 0; controle < media.length; controle++){
        total += media[controle]
    }

    return total / media.length
}
const resultado =  calculaMedia()
io.write(resultado)