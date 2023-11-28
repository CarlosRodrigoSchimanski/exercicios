const io = require('../io/io')
io.write('vamos calcular uma equação de segundo grau ax^2 + bx + c = 0')
io.write('digite o valor de a: ')
const numero1 = io.readInt()

io.write('digite o valor de b: ')
const numero2 = io.readInt()

io.write('digite o valor de c: ')
const numero3 = io.readInt()

//"= b2 – 4ac

const delta = (numero2 * numero2) - (4 * numero1 * numero3)

if (delta < 0) {
    io.write('o delta não possui resultados reais')
}else if (delta === 0){
    io.write('equação possui apenas um resultado real ou possui dois resultados iguais')
}else{
    const resultado1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1)
    const resultado2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1)
    io.write(`valor 1 ${resultado1} valor 2 ${resultado2}`)
}
