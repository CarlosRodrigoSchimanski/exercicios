const io = require('../io/io')
/*
Faça uma função que recebe dois números inteiros e retorna um array
de duas posições, uma com o quociente e a outra com o resto. Sabe-se
que divisão é uma sequência de subtrações, portanto não use os
operadores de divisão inteira do JS.
quociente é o resultado e resto e o resto da divisao
*/

//fazer um loop que vc pega o dividendo e faz ele veses cada numero redefinindo uma variavel chamada quociente a cada loop, quando o valor da multiplicação for maior que o numero que tem que ser dividido o loop para antes de alterar o quociente, agora fazemos uma outra variavel chamada resto receber o numero a ser dividido menos o cociente vezes o dividendo e pronto.

let numeros = []

for(let controle = 0; controle < 2; controle++){
    io.write(`digite o ${controle + 1}° numero`)
    numeros.push(io.readInt())
}

let divisao = (valores) => {
    let quociente = 0
    while ((quociente + 1) * valores[1] <= valores[0]){
        quociente++
    }
    return [quociente, valores[0] - (quociente * valores[1])]
}

const resultado = divisao(numeros)
io.write(`o quociente é: ${resultado[0]} & o resto é: ${resultado[1]}`) 

