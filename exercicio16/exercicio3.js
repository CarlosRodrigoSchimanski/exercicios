const io = require('../io/io')
/*
Faça um programa para receber nome e idade de 10 funcionários (nome,
matrícula, cargo e salário). Depois faça um método que aumente o salário de
cada um em 10%. Mostre a soma dos salários antes e depois do aumento (use o
método de array .reduce() para somar).
*/

let funcionarios = []

for (let i = 0; i < 10; i++){

    io.write('digite seu nome: ')
    const nome = io.read()
    io.write(`Digite sua matricula: `)
    const matricula = io.readInt()
    io.write(`Qual é o cargo?`)
    const cargo = io.read()
    io.write('digite seu salario')
    const salario = io.readFloat()

    const funcionario = {
        nome,
        matricula,
        cargo,
        salario
    }
    funcionarios.push(funcionario)
}

const total = funcionarios.reduce((total,funcionario) => total + funcionario.salario, 0)
io.write(total)

funcionarios.forEach(funcionario => funcionario.salario += funcionario.salario * 0.1)

const novototal = funcionarios.reduce((total,funcionario) => total + funcionario.salario, 0)
io.write(novototal)
