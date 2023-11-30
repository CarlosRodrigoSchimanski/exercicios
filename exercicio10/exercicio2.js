const io = require('../io/io')
/*
Faça um algoritmo que leia a idade de uma pessoa expressa em anos,
meses e dias e escreva a idade dessa pessoa expressa apenas em dias.
Considerar ano com 365 dias e mês com 30 dias.
*/

io.write('digite o ano que vc naceu: ')
const ano = io.readInt()
io.write('digite o mes que vc naceu: ')
const mes = io.readInt()
io.write('digite o dia que vc naceu: ')
const dia = io.readInt()

io.write(`o valor total de dias que vc ja viveu foi: ${((2023 - ano) * 365) + ((mes - 11) * 30) + (dia - 29)}`)