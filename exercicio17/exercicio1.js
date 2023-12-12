const io = require('../io/io')

/*
Faça um programa para receber nome, preço e ano de lançamento de
10 carros utilizando de uma classe Carro. Depois inclua na classe um
método que aumente o preço do carro em R$5.000. Chame o método
para cada carro e mostre os dados atualizados.
*/

class Carro {
    constructor(id, nome, preco, ano) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.ano = ano
    }

    aumentarPreco() {
        this.preco += 5000;
    }
}

const carros = []

for (let i = 0; i < 10; i++){
    io.write('digite o nome do carro: ')
    let nome = io.read()
    io.write('Digite o preço: ')
    let preco = io.readFloat()
    io.write('Digite o ano de lançamento: ')
    let ano = io.readInt()
    carros.push(new Carro(i,nome, preco, ano))
}

carros.forEach(carro => carro.aumentarPreco())
io.write(carros)

