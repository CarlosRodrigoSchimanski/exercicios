const io = require('../io/io')

/* define a variavel depois coloca a condição e por ultimo o encremento */
for (let i = 0; i < 100; i++){
    if (i % 2 === 0){
        io.write(`o numero ${i} é par`)
    }else{
        io.write(`o numero ${i} é impar`)
    }
}