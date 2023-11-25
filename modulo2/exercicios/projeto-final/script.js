// 
let dados = [{
    "id":"",
    "titulo":"",
    "descricao":""
},
{
    "id":123,
    "titulo":"",
    "descricao":""
}]

// criar
function criar_tarefa(titulo, descricao) {
    const id = Math.floor( Math.random() * 1000)
    // 
    dados.push(
        {id,titulo,descricao}
    )
    return id
}
// ler 
function ler_tarefa(id) {
   return dados.find(x => x.id === id)
}
// deletar
function deletar_tarefa(id) {
    if(dados.findIndex(x => x.id === id) === -1){
        console.log("tarefa nao encontrada")
    }else{
        dados.splice(dados.findIndex(x => x.id === id), 1)
        console.log("deletado com sucesso", dados)
    }

}
// atualizar
function atualizar_tarefa(id, titulo, descricao) {
    const index = dados.findIndex(x => x.id === id)

    if(index === -1){
        console.log("tarefa nao encontrada para atualização")
        return
    }else{
        dados[index] = {
            id,
            "titulo": titulo === "" ? dados[index].titulo : titulo,
            "descricao": descricao === "" ? dados[index].descricao : descricao
        }
        console.log("atualizado com sucesso")
    }

}
console.log(atualizar_tarefa(123,"", "descricao muito grande"), dados)
