const excluir = async (id) =>{ // função chamada no butao que passa o id
  await fetch(`http://localhost:3000/posts/${id}`, {
      method:'DELETE'
  })
  mostrarNaTela(carregarDados())
}

const editar = async (id) =>{ //pasando o id como parametro para a pagina de update
  window.location = `update.html?id=${id}`
}

// buscar os posts na api
const carregarDados = async() =>{
    const respostahttp = await fetch(`http://localhost:3000/posts`)
    const resposta = await respostahttp.json()
    return resposta
}
// mostrar os posts na pagina html
const mostrarNaTela = async(resposta) => {
    resposta = await resposta

    const posts = document.getElementById('container')
    posts.innerHTML = ""

    resposta.forEach(element => {
      posts.innerHTML += 
      `
      <div class="card">
        <img class="imagem" src="${element.imagemdestaque}">
        <div id="conteudo">
          <h2>${element.titulo}</h2>
          <p>${element.texto}</p>
          <div id="botoens">
            <button onclick="excluir('${element.id}')">Excluir</button>
            <button onclick="editar('${element.id}')">Editar</button>
          </div>
        </div>
      </div>
      `  
    })
}

mostrarNaTela(carregarDados())
