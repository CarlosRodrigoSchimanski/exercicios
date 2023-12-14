const io = require('../io/io')
/*
Escreva uma função chamada filtrarPalavras que recebe um array de
palavras e uma função de callback. A função filtrarPalavras deve
aplicar a função de callback a cada palavra do array e retornar um novo
array contendo apenas as palavras que satisfazem a condição definida
pela função de callback.
*/

const feriados = ['dia das maes', 'dia das crianças', 'natal', 'revion', 'pascoa', 'natal']

const filtrarPalavras = (lista, filtro) =>{
    return lista.filter(filtro)
}

const filtro = feriado => feriado === 'natal'

const total = filtrarPalavras(feriados,filtro)
io.write(total)