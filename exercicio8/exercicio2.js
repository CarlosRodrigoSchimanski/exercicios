const io = require('../io/io')

io.write('digite o primeiro numero: ')
const numero1 = io.readInt()

io.write('digite o segundo numero: ')
const numero2 = io.readInt()

const resultado = numero1 * numero2

if (resultado > 10){
    io.write(`o numero ${resultado} é maior que 10`)
}else if (resultado === 10){
    io.write(`o numero ${resultado} é igual a 10`)
}else{
    io.write(`o numero ${resultado} é menor que 10`)
}