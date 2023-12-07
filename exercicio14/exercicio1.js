const io = require('../io/io')
/*
Faça um programa que receba do usuário um array de números.
Implemente uma função que recebe o array de números e retorna um
outro array que contém somente os números pares.
*/
let todos = []
let pares = []
let controle = 0

const extrairPar = (lista) => {
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 == 0){
            pares.push(lista[i])
        }
    }
}

while(controle !== -1){
    io.write('digite um numero: ')
    todos.push(io.readInt())
    io.write('Deseja continuar?\nsim - qualquer outra coisa \nnão - (-1):')
    controle = io.readInt()
}

extrairPar(todos)
io.write(pares)