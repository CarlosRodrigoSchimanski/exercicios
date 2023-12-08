const io = require('../io/io')
/*
Escreva uma função que recebe um array qualquer e multiplica cada número
números desse array por 3 quando o número for ímpar e por 4 quando o número
for par. E depois filtre deste array os números menores que 100.
*/
const lista = [22, 30, 4, 28, 17]
io.write(lista)


const multiplica = lista.map(item => {
    if (item % 2 ===0 ) {
        return item * 4
    }else {
        return item * 3
    }
})

io.write('numeros pares multiplicados por 4 e impares por 3')
io.write(multiplica)

const filtro = multiplica.filter(item => item < 100)
io.write('numeros menores que 100')
io.write(filtro)