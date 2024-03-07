// ciar um objeto em uma função que retorna o objeto
// crie uma função factory que gera um Student
// Parametros: name, class, status, document
// Retorno {
//   code: 1,
//   name: ''Victor,
//   class: '401B',
//   status: 'matriculado' || 'pendente,
//   document: '123.123.123-00',
//   createdAt: '2015-04-12' tipo Date
// }

let studentCount = 0

function getDate(){
    const data = new Date()
    const day = String(data.getDate()).padStart(2,'0')
    const month = String(data.getMonth() + 1).padStart(2,'0')
    const year = data.getFullYear()
    return `${day}/${month}/${year}`
}

function makeStudent(data) {
    return{
        ...data, // sprd operator abre as caracteristicas do objeto como forão definidas
        createdAt: getDate()
    }
}

// Crie as funçao para manipular a constante repository
// Deve ser possível:
// - Criar;
// - Editar por código;
// - Buscar por código;
// - Buscar por Turma;
// - Deletar.

const repository = []

function createStudentRepository(data) {
    const student = makeStudent(data)
    Object.assign(student, {code: studentCount++})
    repository.push(student)
}

function updateStudentRepository(code, data) {
    const student = makeStudent(data)

    repository.forEach((item)=>{
        if(item.code == code){
            Object.assign(student,{code: item.code})
            repository.splice(repository.indexOf(item),  1, student)
        }
    })
}

function findStudentByCodeRepository(code) {
    return repository.find((student) => student.code == code )
}

function findStudentByClassRepository(className) {
    return repository.find((student) => student.class == className )
}

function deleteStudentByCode(code) {
    repository.forEach((item)=>{
        if(item.code == code){
            repository.splice(repository.indexOf(item),  1)
        }
    })
}

createStudentRepository({
  name: 'Jubileu',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

createStudentRepository({
  name: 'Ciclano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

updateStudentRepository(1, {
  name: 'Fulano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})
