const io = require('../io/io')
/*
Faça um programa que receba do usuário um array de números. Faça
uma função que recebe o array de números e retorna a soma desses
números. A soma deve ser mostrada ao usuário.
*/
let lista = []
let controle = 0

const somar = (lista) => {
    let total = 0
    for(let cont = 0; cont < lista.length; cont++){
        total += lista[cont]
    }
    return total
}

while (controle !== -1){
    io.write('digite um numero parea somar: ')
    lista.push(io.readInt())

    io.write('digite -1 para sair: ')
    controle = io.readInt()
}
io.write(`A soma dos numeros digitados é ${somar(lista)}`)