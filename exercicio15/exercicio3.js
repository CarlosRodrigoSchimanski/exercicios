const io = require('../io/io')
/*
Escreva uma função que transforme todos cada elemento de um array qualquer
em texto. Dica: todas as variáveis javascript possuem uma função .toString()
*/

const lista = [1,2,3,4]
const desconto = (array) => {
    array = array.map(elemento => elemento.toString())
    io.write(array)
}
desconto(lista)