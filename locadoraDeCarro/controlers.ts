import { Car, Icar } from "./models";
import {carCollection, client} from "./conection"
import {ObjectId} from  'mongodb'
/*
## Requisitos
- Deve ser possível cadastrar um carro, passando as informações: modelo, ano, marca, preço
- Deve ser possível atualizar o statude de um carro para alugado ou disponível
- Deve ser possível listar os carros disponíveis
*/

export class CarRepository {
   
    async create(car: Icar) {
        const carro = new Car(car)
        const response = await carCollection.insertOne(carro)
        console.log(response)
        client.close()
    }

    // criar uma função que altere o status de um carro
    async updateStatus(id: string ,status:string){
        const objID = new ObjectId(id);
        const result = await carCollection.updateOne({_id:objID},{$set:{status:status}}) // se passar um objeto ao inves de um parametro ele substitui todo objeto
        console.log(result)
        client.close()
    }

    // criar uma função que retorne a lista de carros
    async list(){
        const response = await carCollection.find().toArray()
        console.log(response)
        client.close()
    }

    // criar uma função que retorne os carros com status available
    async getCarsByStatus(status:string){
        const response = await carCollection.find({status:status}).toArray();
        console.log(response)
        client.close()
    }
}
