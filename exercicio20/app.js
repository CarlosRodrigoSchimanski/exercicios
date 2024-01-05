const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    //pegar os valores
    const codigo = formulario.elements['codigo'].value
    const quantidade = formulario.elements['quantidade'].value
    const preco = formulario.elements['preco'].value
    const categoria = formulario.elements['categoria'].value
    const nome = formulario.elements['nome'].value

    //colocar o html direto não precisa colocar o visiblit hidem se a div não tem nada fica mais simples
    resultado.innerHTML = `
    <div id="produto">#${codigo} ${nome}</div>
        <div id="item">
            <div>Categoria</div>
            <div class="categoria">${categoria}</div>
        </div>
        <div id="item">
            <div>Preço</div>
            <div class="preco">R$:${preco}</div>
        </div>
        <div id="item">
            <div>Quantidade</div>
            <div class="quantidade">${quantidade}</div>
        </div>
        <h2 id="preco">${preco}</h2>
        `
})