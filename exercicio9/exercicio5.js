const io = require('../io/io')
/*
Faça um programa de computador para escrever 1 - ímpar, 2 - par, 3
- ímpar, .... até n, sendo n fornecido por um usuário.
*/
io.write('digite um numero para descobrirmos quais são os pares e impares até ele: ')
const vezes = io.readInt()
io.write('..................')
let contador = 0

while (contador <= vezes) {
    if (contador%2 === 0){
        io.write(`o valor ${contador} é par`)
    }else {
        io.write(`o valor ${contador} é impar`)
    }
    contador ++
}