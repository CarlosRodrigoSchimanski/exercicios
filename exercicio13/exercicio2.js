const io = require('../io/io')
/*
Faça um programa de computador para contar e imprimir a
quantidade de divisores que um número natural possui. Este número
deverá ser fornecido pelo usuário.
*/
let quantidade = 0
function divisores(numero){
    for(let controle = 0; controle <= numero;  controle++){
        if(numero % controle === 0){
            quantidade++
        }
    }
}
io.write('digite um numero para vermos quantos dividendos ele tem: ')
divisores(io.readInt())
io.write(quantidade)