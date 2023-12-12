const io = require('../io/io')
/*
Faça um programa para receber dados de 10 pessoas (nome, idade e
documento) criando um objeto para cada pessoa. Depois mostrar as que são
maiores de idade (use o método de array .filter() para filtrar).
*/

let pessoas = []

for (let i = 0; i < 10 ; i++){
    io.write('digite seu nome: ')
    const nome = io.read()
    io.write('digite sua idade: ')
    const idade = io.read()
    io.write('digite seu documento: ')
    const documento = io.read()

    const pessoa = {
        nome,
        idade,
        documento
    }
    pessoas.push(pessoa)
}

const maiores = pessoas.filter(pessoa => pessoa.idade >= 18)
io.write(maiores)