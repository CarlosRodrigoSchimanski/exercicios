let id = null //declarado fora para poder usar ele em outras funçoens

const formulario = document.querySelector('#formulario') // pegando o formulario
// esperando o evento do submit e pasando o tipo que é submit e uma função para dizer oq vai ser feito

formulario.addEventListener('submit', async(evento) =>{
    evento.preventDefault()  // para nao atualizar a pagina toda vez que
    // enviar o formulario
    const titulo = formulario.elements['titulo'].value //pegando os valor dos inputs
    const autoria = formulario.elements['autoria'].value
    const imagemdestaque = formulario.elements['imagemdestaque'].value
    const texto = formulario.elements['texto'].value

    const noticia = { // crio o objeto com os parametros do formulario
        titulo: titulo,
        autoria: autoria,
        imagemdestaque: imagemdestaque,
        texto: texto
    }

    await editarNoticia(id,noticia) // chama afunção editar livro pasando o id do livro e um objeto com o livro atualizado
    window.location = 'index.html'
})

const editarNoticia = async(id,noticia) =>{ // fas o put accesando igual o post porem colocando o id para modificar
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT', // o comando put manda trocar oq estiver na url anterior para oq vir no body
        headers: {
            "Accept":"aplication/json text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noticia)
    })
}

const buscarNoticia = async(id) =>{
    const noticia = await (await fetch(`http://localhost:3000/posts/${id}`)).json() // pegando o livro pelo id
    return noticia
}

const pegarNoticiaFormulario = (noticia) =>{
    document.querySelector('#titulo').value = noticia.titulo
    document.querySelector("#autoria").value = noticia.autoria
    document.querySelector("#imagemdestaque").value= noticia.imagemdestaque
    document.querySelector("#texto").value= noticia.texto
}

const caregarDados = async() =>{
    const parametros = window.location.search // pega o parametro recebido pela url
    const objetoParametros = new URLSearchParams(parametros) // transforma os parametros em um objeto do qual se pode pegalos com o .get()

    id = objetoParametros.get('id') // coloca o id do objeto na variavel id

    const noticia = await buscarNoticia(id) // colocar o livro especifico da variavel id nesta variavel buscando na função buscarLivro e passando o id

    pegarNoticiaFormulario(noticia)
}

caregarDados()