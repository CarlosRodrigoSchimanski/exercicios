const io = require('../io/io')

io.write('digite o primeiro preço: ')
const numero1 = io.readInt()

io.write('digite o segundo preço: ')
const numero2 = io.readInt()

const resultado = (numero1 + numero2) / 2
io.write(`a media entre ${numero1} e ${numero2} é: ${resultado}`)