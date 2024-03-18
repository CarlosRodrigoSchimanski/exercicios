export interface IFilme{ // cria um modelo da tipagem do objeto que vai ser recebido
    titulo:string
    lancamento:number
    genero:string
    duracao:number
    avaliacao:number
    status: "disponível" | "indisponível"
}

export class Filme implements IFilme{ // o implements serve para avisar erros pelo interface
    titulo:string
    lancamento:number
    genero:string
    duracao:number
    avaliacao:number
    status: "disponível" | "indisponível"
    constructor(film: IFilme){ // usa um objeto e define a ele a tipagem ja feita no Icar
        this.titulo = film.titulo
        this.lancamento = film.lancamento
        this.genero = film.genero  
        this.duracao = film.duracao
        this.avaliacao = film.avaliacao
        this.status = film.status
    }
}