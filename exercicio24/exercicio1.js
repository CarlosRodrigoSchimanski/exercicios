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
class Repository{
    constructor(){
        this.repository = []
        this.userID = 0
    }

    addUser(data){
        const user = new User(data, this.userID++)
        this.repository.push(user)
        return user
    }

    findById(id){
        return  this.repository.find(item => item.id === id )
    }
}

class Post{
    constructor(content,postID){
        this.id = postID
        this.createdAt = new Date().toISOString()
        this.content = content
    }
}

class User{
    constructor(data,id){
        this.postID = 0
        this.id = id
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

const repository1 = new  Repository()

const juan = repository1.addUser({nickname:"juan", email : "juan@gmail.com" , password : '123456' })
const lucas = repository1.addUser({nickname:"lucas", email : "lucas@gmail.com" , password : '123456' })

lucas.createPost("Hola como estas")
console.log(repository1)
console.log(repository1.findById(lucas.id))
console.log(repository1.findById(lucas.id).findPost(0))
