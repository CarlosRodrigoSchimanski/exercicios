const io = require('../io/io')

io.write('digite o numero do primeiro segimento de reta: ')
const numero1 = io.readInt()

io.write('digite o numero do segundo segimento de reta: ')
const numero2 = io.readInt()

io.write('digite o numero do terceiro segimento de reta: ')
const numero3 = io.readInt()

if(numero1 + numero2 < numero3 || numero1 + numero3 < numero2 || numero2 + numero3 < numero1){
    io.write(`os valores ${numero1} + ${numero2} + ${numero3} não formão um triangulo.`)
}else{
    io.write(`os valores ${numero1} + ${numero2} + ${numero3} formão um triangulo.`)
}