const io = require('../io/io')

io.write('digite um numero: ')
const numero = io.readInt()

const resultado = Math.sqrt(numero)

io.write('a raiz do seu numero é: ' + resultado)