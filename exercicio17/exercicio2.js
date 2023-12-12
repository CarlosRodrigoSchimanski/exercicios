const io = require('../io/io')

/*
Faça um programa para receber modelo, marca e valor de 5
smartphones utilizando de uma classe Celular. Depois inclua na classe
método que mostre os dados de cada um nesse formato: Modelo:
[modelo] | Marca: [marca] | Valor: [valor]. Chame o método
para cada smartphone.
*/

class Celular {
    constructor(id, modelo, marca, valor) {
        this.id = id;
        this.modelo = modelo
        this.marca = marca
        this.valor = valor
    }

    mostrarTudo(){
        io.write(`modelo: [${this.modelo}] | marca: [${this.marca}] | valor: [${this.valor}]`)
    }
}

const celulares = []

for (let i = 0; i < 5; i++){
    io.write('digite o modelo: ')
    let modelo = io.read()
    io.write('Digite a marca: ')
    let marca = io.read()
    io.write('Digite o valor: ')
    let valor = io.readInt()
    celulares.push(new Celular(i,modelo, marca, valor))
}

celulares.forEach(celular => celular.mostrarTudo())
