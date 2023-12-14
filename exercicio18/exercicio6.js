const io = require('../io/io')
/*
Dado o seguinte array de objetos que representa produtos em um e-commerce:
const produtos = [
{ id: 1, nome: 'Camiseta', preco: 29.9, quantidade: 2 },
{ id: 2, nome: 'Calça', preco: 59.9, quantidade: 1 },
{ id: 3, nome: 'Tênis', preco: 99.9, quantidade: 3 },
{ id: 4, nome: 'Meias', preco: 9.9, quantidade: 5 }
]
*/
const produtos =[]

class Produto{
    constructor(id,nome,preco,quantidade){
        this.id = id
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
}

const camiseta = new Produto(1, 'Camiseta', 29.9, 2)
produtos.push(camiseta)
const calca = new Produto(1, 'Calça', 59.9, 1)
produtos.push(calca)
const tenis = new Produto(1, 'Tenis', 99.9, 3)
produtos.push(tenis)
const meias = new Produto(1, 'Meias', 9.9, 5)
produtos.push(meias)
/*
Escreva uma função chamada calcularTotalCompra que recebe esse array de
produtos e retorna o valor total da compra, levando em consideração o preço e a
quantidade de cada produto.
*/
const calcularTotalCompra = (lista) => {
    let total = 0
    lista.forEach(element => {
        for(let i = 0; i < element.quantidade; i++){
            total += element.preco
        }  
    })
    return total
}

const total = calcularTotalCompra(produtos)
io.write(total)