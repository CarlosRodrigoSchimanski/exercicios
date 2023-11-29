const io = require('../io/io')
/*
Faça um programa para imprimir os múltiplos de 5 menores ou igual
a n, sendo n fornecido pelos usuários. Não use comando de decisão.
*/
io.write('digite um numero para descobrirmos quais são os multiplos de 5 ate ele: ')
const vezes = io.readInt()
io.write('..................')

let contador = 5

while (contador <= vezes) {
    io.write(contador)
    contador +=5
}