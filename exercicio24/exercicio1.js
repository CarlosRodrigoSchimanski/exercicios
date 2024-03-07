/*# Sistema Blog
OBS: Crie o sistema utilizando as camadas Entities/Repositories

## Entidade

Post {
  id: string
  content: string
  createdAt: string
}

User {
  id: string
  nickname: string
  email: string
  password: string
  posts: array
  createdAt: string
}
## Casos de uso

- Deve ser possível criar um usuário, passando: email, password, nickname
- Deve ser possível atualizar um usuário
- Deve ser possível busca um usuário
- Deve ser possível buscar um usuário pelo id
- Deve ser possível buscar um usuário pelo email
- Deve ser possível criar um post relacionado a um usuário, passando: content
*/
const repository = []
let userID = 0

class Post{
    constructor(content,postID){
        this.id = postID
        this.createdAt = new Date().toISOString()
        this.content = content
    }
}

class User{
    constructor(data){
        this.postID = 0
        this.id = (userID++).toString()
        this.nickname = data.nickname
        this.email = data.email
        this.password = data.password
        this.posts = []
        this.createdAt = new Date().toISOString()
    }

    update(data) {
        this.nickname = data.nickname
        this.email = data.email
        this.password = data.password
    }

    createPost(content) {
        const post = new Post(content,this.postID++)
        this.posts.push(post)
    }

    updatePost(index,content){
        this.posts.forEach((item)=>{
            if(item.id == index){
                Object.assign(item,{content: content})
            }
        })
    }

    findPost(id){
        return  this.posts.find(item => item.id === id )
    }
}


const user1 = new  User({
    nickname:'felipe',
    email:'felipe@gmail.com',
    password:'123456'
})

const user2 = new  User({
    nickname:'maria',
    email:'maria@hotmail.com',
    password:'abcdefg'
})

user1.createPost('Olá!')
console.log(user1)
user1.update({
    nickname: 'José',
    email: 'josedasilva_97@hotmail.com',
    password: 'NovaSenha123'
})
user1.updatePost(0,'Tudo bem?')
console.log(user1)
console.log(user1.findPost(0))

// to com sono o resto faço depois