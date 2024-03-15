/*
Car
- model (string)
- releasedAt (number)
- brand (string)
- price (number)
- status ("rented" ou "available") por padrao "available"
*/
// Criar um carro com os dados fornecidos e exportar

export interface Icar{ // cria um modelo da tipagem do objeto que vai ser recebido
    model: string
    releasedAt: number
    brand: string
    price: number
    status: 'rented' |  'available'
}

export class Car implements Icar{ // o implements serve para avisar erros pelo interface
    model: string
    releasedAt: number
    brand: string
    price: number
    status: 'rented' |  'available'
    constructor({model, releasedAt, brand, price, status}: Icar){ // usa um objeto e define a ele a tipagem ja feita no Icar
        this.model = model
        this.releasedAt = releasedAt
        this.brand = brand
        this.price = price
        this.status = status
    }
}