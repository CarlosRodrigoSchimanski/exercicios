const io = require('../io/io')
/*
Faça um programa para imprimir os números pares menores que 100.
Não use comando de decisão
*/
io.write('veja os numeros pares menores que 100: ')
io.write('..................')

let contador = 0

while (contador < 100) {
    io.write(contador)
    contador +=2
}
