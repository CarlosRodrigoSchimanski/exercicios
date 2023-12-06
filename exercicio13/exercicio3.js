const io = require('../io/io')
/*
Faça um programa de computador que receba um número natural e
acuse se é primo ou não através de uma função chamada isPrimo.
Números primos são os naturais maiores que 1 e que possuem
somente 2 divisores.
*/

function isPrimo(numero) {
    let quantidade = 0

    if (numero <= 1){
        return 'não é um numero valido'
    }else {
        for(let controle = 0; controle <= numero;  controle++){
            if(numero % controle === 0){
                quantidade++
            }
        }
    }

    if (quantidade == 2){
        return true
    }else {
        return false
    }
}

io.write('digite um numero para vermos se e primo')
io.write(isPrimo(io.read()))