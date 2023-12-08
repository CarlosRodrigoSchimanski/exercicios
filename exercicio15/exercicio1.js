const io = require('../io/io')
/*
Escreva uma função que recebe como parâmetro um array de números. Dado este array, a
função deverá:
a. Deixar no array somente os números ímpares (utilize filter)
b. Somar todos os números restantes (utilize reduce)
c. Escrever a string "Javascript é muito bom" no console um número x de vezes, sendo x
a soma dos números restantes do array
*/

const listaNumeros = [1,2,3,4,5,6,7,8,9]
io.write('esta é a lista')
io.write(listaNumeros)
io.write(".....................")

const tratamento = (lista) => {
    lista = lista.filter(numero => numero % 2 !== 0 )
    io.write('esta e a lista de impares')
    io.write(lista)
    io.write(".....................")

    const total = lista.reduce((acumulador, atual) => acumulador + atual)
    io.write('esta e a soma dos impares')
    io.write(total)
    io.write(".....................")

    for(let i = 0; i < total; i++){
        io.write('Javascript é muito bom')
    }
}

tratamento(listaNumeros)