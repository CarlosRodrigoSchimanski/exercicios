const io = require('../io/io')

/*
Faça um programa para receber os dados de 10 alunos (nome, matrícula e
nota) criando um objeto para cada aluno. Depois aumentar em 10% as notas
dos alunos com matrícula maior que 1000 e mostrar a lista de alunos atualizada.
*/

let alunos = []

for (let i = 0; i < 10; i++){
    io.write('digite o nome do aluno')
    let nome = io.read()
    io.write('digite a matricula do aluno')
    let matricula = io.read()
    io.write('Digite a nota do aluno: ')
    let nota = io.readFloat()

    const pessoa = {
        nome,
        matricula,
        nota
    }
    alunos.push(pessoa)
}

alunos = alunos.filter(aluno => {
    if (aluno.matricula > 1000){
        return aluno.nota += aluno.nota * 0.1
    }
})


io.write(alunos)