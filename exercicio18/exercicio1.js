const io = require('../io/io')

/*
Escreva uma função chamada somarValores que recebe um
array de números e retorna a soma de todos os valores do array
utilizando a função reduce.
*/

const array = [1,2,3,4,5]
const somarValores = (lista) => {
    return lista.reduce((acumulador, atual) => acumulador + atual,0)
}
const total = somarValores(array)
io.write(total)