const io = require('../io/io')

io.write('digite o primeiro numero: ')
const numero1 = io.readInt()

io.write('digite o segundo numero: ')
const numero2 = io.readInt()

if (numero1 > numero2){
    io.write('o maior numero é: ' + numero1)
}else {
    io.write('o maior numero é: ' + numero2)
}