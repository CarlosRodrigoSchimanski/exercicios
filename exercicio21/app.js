import {
    chavePublica,
    chavePrivada
} from './configure.js'

const timestamp = (new Date()).getTime()
const publicKey = chavePublica
const privateKey = chavePrivada
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
    .then((response) => response.json()) // convertendo para json em uma linha
    .then((resposta) => {
        console.log(resposta.data.results) // para exibir nesta api tem que usar o .date.results

        const personagems = resposta.data.results// pegando cada clase fornecida pela api
        console.log(personagems)
        
        
        const content = document.querySelector('#content') // pegando a div
        personagems.forEach(personagem => { // fazendo um loop para mostar o nome e a foto de cada personagem

            //..................................
            const comic = personagem.comics.items.filter((item, index) => {
                return index < 2
            })
    
            let revistas = ''
    
            comic.forEach((item) => {
                revistas += `<li>${item.name}</li>`
            })

            //.................................................
            const series = personagem.series.items.filter((item, index) => {
                return index < 2
            })
    
            let seres = ''
    
            series.forEach((item) => {
                seres += `<li>${item.name}</li>`
            })

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
