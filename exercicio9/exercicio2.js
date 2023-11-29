const io = require('../io/io')
/*
Faça um programa que receba do usuário 20 números e imprima a
média aritmética desses números
*/
io.write('vamos tirar a media: ')
io.write('..................')

let contador = 0
let total = 0

while (contador < 20) {
    io.write('digite um numero: ')
    total += io.readInt()
    contador ++
}

io.write('..................')
io.write(`á media dos numeros é ${total / 20}`)