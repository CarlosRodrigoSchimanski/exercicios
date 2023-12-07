const io = require('../io/io')
/*
Faça um programa que receba do usuário um array de números. Faça
uma função que recebe o array de números e retorna a soma desses
números. A média deve ser mostrada ao usuário.
*/
const somar = () => {
    let controle = 0
    let contador = 0
    let total = 0

    while (controle !== -1){
        io.write('digite um numero')
        total += io.readInt()
        contador++

        io.write('se quiser parar digite -1')
        controle = io.readInt()
    }
    return [total, (total / contador)]
}

let resultado = somar()
io.write(`a soma dos valores foi ${resultado[0]} e a média foi ${resultado[1]}`)