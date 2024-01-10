//const formulario = document.querySelector('#formulario')
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

    resposta.forEach(element => {
      posts.innerHTML += 
      `
      <div class="card">
        <img class="imagem" src="${element.imagemdestaque}">
        <div id="conteudo"><h2>${element.titulo}</h2><p>${element.texto}</p></div>
      </div>
      `  
    })
}

/*formulario.addEventListener('submit', (evento) =>{
    const data = {
        id: 1,
        title: 'My new post',
        description: 'This is my new post',
        ear: '2023'
    }
      
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => {
        console.log(response);
    })
})*/

mostrarNaTela(carregarDados())
