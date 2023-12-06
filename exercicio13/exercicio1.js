const io = require('../io/io')
/*
Faça um programa que peça ao usuário um número natural e
imprima seus divisores.
➢ Divisores de 10: números menores ou iguais à 10 pelos quais 10 se
divide de forma exata (com resto igual a 0)
■ 1, 2, 5, 10
*/
let numeros = []
function divisores(numero){
    for(let controle = 0; controle < numero;  controle++){
        if(numero % controle === 0){
            numeros.push(controle)
        }
    }
}
io.write('digite um numero para vermos seus dividendos')
divisores(io.readInt())
io.write(numeros)
