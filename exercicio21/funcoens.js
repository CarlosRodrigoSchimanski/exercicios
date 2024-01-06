export function filtrar(objeto, quantidade){
    let resultado = objeto.items.filter((item, index) => {
        return index < quantidade
    })
    let revistas = ''
    resultado.forEach((item) => {
        revistas += `<li>${item.name}</li>`
    })
    return revistas
}