const io = require('../io/io')

/*
Faça uma função que recebe um valor inteiro e verifica se o valor é par.
A função deve retornar um valor booleano (true ou false).
*/

function inteiro(valor){
    return valor % 2 === 0
}

io.write('digite um valor para verificarmos se é par: ')
const valor = io.readInt()
io.write(inteiro(valor))