const io = require('../io/io')
/*
Dado o seguinte array de objetos que representa estudantes:
const estudantes = [
{ nome: 'João', idade: 20 },
{ nome: 'Maria', idade: 22 },
{ nome: 'Pedro', idade: 18 },
{ nome: 'Ana', idade: 21 }]
*/
const estudantes = []

class Estudante{
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }
}
const joao = new Estudante('joao', 20)
estudantes.push(joao)
const maria = new Estudante('maria', 22)
estudantes.push(maria)
const Pedro = new Estudante('pedro', 18)
estudantes.push(Pedro)
const ana = new Estudante('ana', 21)
estudantes.push(ana)

/*
Escreva uma função chamada aplicarDesconto que recebe esse array de
estudantes e uma função de callback. A função aplicarDesconto deve
aplicar a função de callback a cada estudante, modificando o objeto para
incluir uma propriedade "desconto" com base na idade do estudante.
Exercício 5

*/

function aplicarDesconto(arrayEstudantes,funcaoCallback){
    return arrayEstudantes.map(element => funcaoCallback(element))

}

/*
A função passada como callback deve se chamar calcularDesconto . O desconto deve
ser calculado da seguinte forma: se a idade do estudante for menor que 20, o desconto é
de 10%; caso contrário, o desconto é de 5%. A função deve retornar o array de estudantes
modificado.
*/
const calcularDesconto = (estudante) => {
    if(estudante.idade < 20){
        estudante.desconto = 0.1
    }else {
        estudante.desconto = 0.05
    }
    return estudante
}

const estudantesDesconto = aplicarDesconto(estudantes,
    calcularDesconto)

io.write(estudantesDesconto)