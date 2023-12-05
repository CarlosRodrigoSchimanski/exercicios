const io = require('../io/io')
/*
Fatorial de um número natural é a multiplicação dos naturais menores ou
igual a ele. 5! = 5x4x3x2x1. Faça um programa que receba do usuário um
número n calcule seu fatorial (use while)
*/

io.write('vamos calcular o fatorial')
io.write('digite o numero para calcular o fatorial')
let valor = io.readInt()
let total = 1

while (valor > 1) {
    total *=  valor
    valor--
}

io.write(total)