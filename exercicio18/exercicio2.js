const io = require('../io/io')
/*
Dado o seguinte array de objetos que representa produtos em um
e-commerce:
const produtos = [
{ id: 1, nome: 'Camiseta', preco: 29.9 },
{ id: 2, nome: 'Calça', preco: 59.9 },
{ id: 3, nome: 'Tênis', preco: 99.9 }
]
Escreva uma função chamada calcularTotal que recebe esse array de
produtos e retorna o valor total da compra, somando o preço de cada
produto.
*/

const produtos = []

class Produto{
    constructor(id, item,valor) {
        this.id = id;
        this.item = item
        this.valor = valor
    }
}

const calcularTotal = (lista) =>{
    let soma = 0
    return soma = lista.reduce((acumulador, atual) => acumulador + atual.valor,0)
}

const camiseta = new Produto(1,'Camiseta',29.9)
produtos.push(camiseta)

const calca = new Produto(2,'Calça',59.9)
produtos.push(calca)

const tenis = new Produto(3,'Tênis',99.9)
produtos.push(tenis)


const total = calcularTotal(produtos)
io.write(total)