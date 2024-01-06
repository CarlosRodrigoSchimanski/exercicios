import {chavePublica,chavePrivada} from './configure.js'
import { filtrar } from './funcoens.js'

const timestamp = (new Date()).getTime()
const publicKey = chavePublica
const privateKey = chavePrivada
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
    .then((response) => response.json()) // convertendo para json em uma linha
    .then((resposta) => {
        const personagems = resposta.data.results// pegando cada clase fornecida pela api
        
        const content = document.querySelector('#content') // pegando a div
        personagems.forEach(personagem => { // fazendo um loop para mostar o nome e a foto de cada personagem

            let revistas = filtrar(personagem.comics,2)
            let seres = filtrar(personagem.series,2)

            content.innerHTML +=
            `
            <div class="card">
                <img class="imagem" src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
                <div class="descricao">
                <h1>${personagem.name}</h1>
                    <div>
                        ${revistas}
                    </div>
                    <div>
                        ${seres}
                    </div>
                </div>
            </div>
            `
        })
    })
