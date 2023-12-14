const io = require('../io/io')

/*
Escreva uma função chamada dobrarNumeros que recebe um array de
números e uma função de callback. A função dobrarNumeros deve aplicar
a função de callback a cada número do array e retornar um novo array
com os valores resultantes.
*/

const numeros = [1,2,3,4,5]

const dobrarNumeros = (lista, dobrar) =>{
    let novalista=[]
    lista.forEach(numero => {
        const n = dobrar(numero)
        novalista.push(n)
    })
    return novalista
}


const dobra = (numero) =>{
    return numero * 2
}


const resultado = dobrarNumeros(numeros, dobra)
io.write(resultado)