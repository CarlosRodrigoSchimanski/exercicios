const io = require('../io/io')

/**
Faça uma função que recebe a idade de uma pessoa em anos, meses e
dias e retorna essa idade expressa em dias.
 */

function idade(ano, mes, dia){
    const total = ((2023 - ano) * 365) + ((mes - 11) * 30) + (dia - 29)
    return total
}

io.write('digite o ano que vc naceu: ')
const ano = io.readInt()
io.write('digite o mes que vc naceu: ')
const mes = io.readInt()
io.write('digite o dia que vc naceu: ')
const dia = io.readInt()

io.write(`voce naceu a ${idade(ano, mes, dia)} dias.`)