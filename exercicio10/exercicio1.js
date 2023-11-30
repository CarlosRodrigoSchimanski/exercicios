const io = require('../io/io')
/*
Faça um programa de computador para calcular o quanto gastou um
fumante com seu vício. O usuário deverá informar o número de anos que
fuma, o número de cigarros por dia e o preço do maço de cigarro.
Considere o maço com 20 unidades.
*/

io.write('vamos calcular seu vicio')

io.write('digite quantos cigarros vc fuma por dia: ')
const cigarros = io.readInt()

io.write('digite a quantos anos vc fuma: ')
const anos = io.readInt()

io.write('digite o preço da carteira do cigarro que vc fuma: ')
const preco = io.readInt()

io.write('..................................')

const valor = (((anos * 365) * cigarros) / 20) * preco
io.write(valor)

