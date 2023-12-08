const io = require('../io/io')
/*
Uma loja resolveu fazer uma promoção, e todo o seu estoque terá que sofrer uma
atualização de preços, dando 15% de desconto em todos os produtos que custam acima
de 500 reais. Considerando o array abaixo, faça um programa que crie um novo array com
os preços atualizados. Dica: você deverá usar map e dentro da função que o map recebe
como parâmetro, utilizar um if. Não se esqueça de retornar o valor sem alterações caso ele
não entre no if.

const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]
*/
const preços = [1000, 40, 340, 501, 500, 1093, 245, 21]

const reajuste = preços.map(item => {
    if (item > 500) {
        return item - (item * 0.15)
    }else {
        return item
    }
})

io.write(reajuste)