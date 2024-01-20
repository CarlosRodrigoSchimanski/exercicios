const showForm = ()=>{ // aqui eu faço a barra lateral aparecer e sumo com o botão
    document.getElementById('login').style.display="flex"
    document.getElementById('goToForm').style.display="none"
}

const formulario = document.querySelector('#form')  // pego o formulario
formulario.addEventListener('submit', async(evento) =>{ // crio um evento atraves do formulario
    evento.preventDefault() // impeço que atualize

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const users = await (await fetch('http://localhost:3000/Users')).json() //aceço a tabela Users
    
    users.forEach(element => { // para cada item da tabela Users
        
        if(element.email === email  && element.password === password){ // comparo se os dados do formulario são iguais a os dados de cada elemento da tabela poderia ser feito com o filter tbm

            window.location = `../home/home.html?id=${element.id}` // se os dados confirmao envio para pagina home com o id

        }else{// caso não confirme coloco um alerta avisando dos dados invalidos
            alert("usuario ou senha invalidos")
        }
    })
})