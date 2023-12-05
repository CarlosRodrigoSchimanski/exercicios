const io = require('../io/io')

/* define a variavel depois coloca a condição e por ultimo o encremento */
for (let i = 0; i < 10; i++){
    io.write('digite um nome: ')
    const nome = io.read()
    io.write('o nome informado foi: ' + nome)
}