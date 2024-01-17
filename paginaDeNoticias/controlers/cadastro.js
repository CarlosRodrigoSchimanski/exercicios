const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', async(evento) =>{
    evento.preventDefault()

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autoria'].value
    const imagem = formulario.elements['imagemdestaque'].value
    const texto = formulario.elements['texto'].value

    const noticia = {
        "titulo": titulo,
        "autoria": autor,
        "imagemdestaque": imagem,
        "texto": texto
    }
    await fetch('http://localhost:3000/posts',{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(noticia)
    })
    window.location='index.html'
})