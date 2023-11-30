const io = require('../io/io')
/*
Escreva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e escrever
o percentual que cada um representa em relação ao total de eleitores.
*/

io.write('digite o numero de eleitores que votarão valido: ')
const valido = io.readInt()
io.write('digite o numero de eleitores que votarão branco: ')
const branco = io.readInt()
io.write('digite o numero de eleitores que votarão nulo: ')
const nulo = io.readInt()

const total = valido + branco + nulo

io.write(`forão ${(valido * 100) / total}% votos validos e ${(branco * 100) / total}% votos branco e ${(nulo * 100) / total}% votos nulos`)