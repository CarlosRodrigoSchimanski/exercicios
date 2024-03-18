import { Filme, IFilme } from "./models";
import {filmCollection, client} from "./conection"
import {ObjectId} from  'mongodb'


export class FilmCollection {
    // Deve ser possível cadastrar um filme, passando as informações: título, lançamento, gênero, duração e avaliação.
    async create(film: IFilme) {
        const response = await filmCollection.insertOne(film)
        console.log(response)
        client.close()
    }

    // Deve ser possível atualizar o status do filme passando o seu ID.
    async updateStatus(id: string ,status:string){
        const objID = new ObjectId(id);
        const result = await filmCollection.updateOne({_id:objID},{$set:{status:status}}) // se passar um objeto ao inves de um parametro ele substitui todo objeto
        console.log(result)
        client.close()
    }

    // Deve ser possível deletar um filme pelo ID.
    async deleteById(id: string) {
        const response = await filmCollection.deleteOne({_id : new ObjectId(id)})
        return response
    }

    // criar uma função que retorne a lista de filmes
    async list(){
        const response = await filmCollection.find().toArray()
        console.log(response)
        client.close()
    }

    // criar uma função que retorne os filmes com status available
    async getFilmByStatus(status:string){
        const response = await filmCollection.find({status:status}).toArray();
        console.log(response)
        client.close()
    }
    
    // Deve ser possível buscar um filme pelo título (LIKE QUERY).
    async searchTitle(title:string){
        const response = await filmCollection.find({ titulo: { $regex: title, $options: 'i' } }).toArray() // "i" é para case insensitive, ou seja, não diferencia entre maiúsculas e minúsculas.
        console.log(response)
        client.close()
    }

    // - Deve ser possível buscar os filmes com lançamento maior ou igual ao recebido pelo parâmetro (Greater than or equal QUERY).
    async searchGtAvaliation(parameter:number){
        const response = await filmCollection.find({avaliacao: { $gte: parameter } }).toArray()
        console.log(response)
        client.close()
    }

    // Deve ser possível buscar os filmes com avaliação maior ou igual a um determinado valor (Greater than or equal QUERY).
    async searchGtLancamento(parameter:number){
        const response = await filmCollection.find({ lancamento: { $gte: parameter } }).toArray()
        console.log(response)
        client.close()
    }
}
