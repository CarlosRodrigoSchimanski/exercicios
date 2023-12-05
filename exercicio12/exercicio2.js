const io = require('../io/io')
/*
Faça uma função que recebe a idade de um nadador por parâmetro e
retorna a categoria desse nadador de acordo com a tabela abaixo:
*/
let controle = 1
const infantilA = []
const infantilB = []
const juvenilA = []
const juvenilB = []
const maiorDeIdade  = []

function categoria_de_narrador(nome, idade){
    if (idade >= 5 && idade <= 7){
        infantilA.push(nome)
    }else if (idade >= 8 && idade <= 10){
        infantilB.push(nome)
    }else if (idade >= 11 && idade <= 13){
        juvenilA.push(nome)
    }else if (idade >= 14 && idade <= 17){
        juvenilB.push(nome)
    }else if (idade >= 18){
        maiorDeIdade.push(nome)
    }else{
        io.write('valor invalido')
    }
}

function exibe_nadadores(nadador){
    if (nadador.length > 0) {
        for (let i = 0; i < nadador.length; i++){
            io.write(` # ${nadador[i]}`)
        }
    }  
}

while(controle !== 0){
    io.write('digite o nome do nadador: ')
    const nome = io.read()
    io.write('digite a idade do nadador: ')
    const idade = io.readInt()
    categoria_de_narrador(nome, idade)
    io.write('digite 1 para continuar e 0 para parar')
    controle = io.readInt()
}

io.write('Infantil A ')
exibe_nadadores(infantilA)
io.write('........................')
io.write('')

io.write('Infantil B ')
exibe_nadadores(infantilB)
io.write('........................')
io.write('')

io.write('Juvenil A ')
exibe_nadadores(juvenilA)
io.write('........................')
io.write('')

io.write('Juvenil B ')
exibe_nadadores(juvenilB)
io.write('........................')
io.write('')

io.write('Adulto')
exibe_nadadores(maiorDeIdade)
io.write('........................')
io.write('')