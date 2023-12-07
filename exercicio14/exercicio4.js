const io = require('../io/io')
/*
Faça um programa que receba do usuário um array de números. Faça
uma função que recebe o array e retorna outro array com os valores em
ordem invertida. (sem usar o .reverse())
*/
let numeros = []
let controle = 0

const inverteLista = (lista) => {
    let novalista = []
    let total = (lista.length - 1)

    for(let i = 0; i <= total; total--){
        novalista.push(lista[total])
    }
    return novalista
}

while (controle !== -1){
    io.write('digite um numero')
    numeros.push(io.readInt())
    
    io.write('se quiser parar digite -1')
    controle = io.readInt()
}

let invertida = inverteLista(numeros)
io.write(invertida)