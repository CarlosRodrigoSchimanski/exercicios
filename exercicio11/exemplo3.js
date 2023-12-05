const io = require('../io/io')

/* define a variavel depois coloca a condição e por ultimo o encremento */

function newFunction() {
    io.write('defina a quantidade de repitiçoes: ')
    const valor = io.readInt()
    for (let i = 0; i < valor; i++) {
        io.write('arnia')
    }
}
newFunction()
