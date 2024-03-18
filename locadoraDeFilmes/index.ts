import { Filme } from "./models";
import { FilmCollection} from "./controlers";

const filmRepository = new FilmCollection()
/*
console.log(" Deve ser possível cadastrar um filme, passando as informações: título, lançamento, gênero, duração e avaliação.")
const avengers:Filme = {
    titulo: 'avengers',
    lancamento: 2012,
    genero: 'ação',
    duracao: 120,
    avaliacao: 9.5,
    status: "disponível"
}
filmRepository.create(avengers)

const altoDaCompadecida:Filme = {
    titulo: 'alto  da compadecida',
    lancamento:2000,
    genero: 'comedia',
    duracao: 120,
    avaliacao: 9.5,
    status: "disponível"
}
filmRepository.create(altoDaCompadecida)

const altoDaCompadecida:Filme = {
    titulo: 'gente grande',
    lancamento:2010,
    genero: 'comedia',
    duracao: 120,
    avaliacao: 5,
    status: "disponível"
}
filmRepository.create(altoDaCompadecida)


console.log("Listagem de todos os filmes")
console.log(filmRepository.list())

console.log("Deve ser possível buscar um filme pelo título (LIKE QUERY).")
filmRepository.searchTitle('Avengers')

console.log("Deve ser possível buscar os filmes com lançamento maior ou igual ao recebido pelo parâmetro (Greater than or equal QUERY).")
filmRepository.searchGtLancamento(2000)

console.log('Deve ser possível buscar os filmes com avaliação maior ou igual a um determinado valor (Greater than or equal QUERY)')
filmRepository.searchGtAvaliation(8)

console.log('Deve ser possível atualizar o status do filme passando o seu ID.')
filmRepository.updateStatus('65f8a9ced7b196e2825afb6a','indisponível')

console.log('Deve ser possível deletar um filme pelo ID.')
filmRepository.deleteById('65f8af02f50d8323af8f774d')
console.log(filmRepository.list())
*/