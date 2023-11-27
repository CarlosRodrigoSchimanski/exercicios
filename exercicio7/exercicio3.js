const io = require('../io/io')

io.write('digite o primeiro numero: ')
const numero1 = io.readInt()

io.write('digite o segundo numero: ')
const numero2 = io.readInt()

const resultado = numero1 / numero2
io.write(`resultado da divisão de ${numero1} por ${numero2} é: ${resultado}`)