const io = require('../io/io')
/*
Escreva um algoritmo para ler o salário mensal atual de um funcionário e
o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/

io.write('vamos calcular seu novo salario')

io.write('digite seu salario')
const salario = io.readInt()

io.write('digite a porcentagem de reajuste')
const percentagem = io.readInt()

const extra = (salario * percentagem) / 100

io.write(`seu novo salario sera ${(extra + salario)}`)