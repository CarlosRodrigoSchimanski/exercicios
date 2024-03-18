import {Collection, MongoClient} from  'mongodb'
import {url}  from './configure'

const myUrl:string = url

export const client = new MongoClient(myUrl)

export const filmCollection:Collection = client.db('myProject').collection('Filmes')



