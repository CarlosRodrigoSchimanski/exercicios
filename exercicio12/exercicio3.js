const io = require('../io/io')
/*
Escreva uma função que recebe, por parâmetro, dois valores X e Z e
calcula e retorna Xz

(X elevado à Z). (sem utilizar funções ou operadores de potência prontos)
*/

function potencia(x, z){
    let resultado = x
    for (let controle = 0; controle < z; controle++){
        resultado *= x 
    }
    return resultado
}

io.write('vamos fazer uma potencia')
io.write('digite o numero base')
const base = io.readInt()
io.write('digite o expoente')
const expoente = io.readInt()

const resultado = potencia(base, expoente)
io.write(resultado)