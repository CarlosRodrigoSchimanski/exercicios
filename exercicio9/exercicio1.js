const io = require('../io/io')
/*
Faça um programa que recebe do usuário um número inteiro n e uma
frase e escreva esta frase n vezes
*/
io.write('quantas veses vc quer que repita a frase: ')
const vezes = io.readInt()

io.write('digite sua frase: ')
const fraze = io.read()

io.write('..................')
let contador = 0

while (contador < vezes) {
    io.write(fraze)
    contador ++
}