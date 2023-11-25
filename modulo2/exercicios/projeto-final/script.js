let dados = [
//     {
//     "id":"524",
//     "titulo":"algo1",
//     "descricao":"lorem uahfshjfhjhfhdsfbgghnmggngthtttt"
// },
// {
//     "id":"564",
//     "titulo":"algo4",
//     "descricao":"lorem uahfshjfhjhfhdsfbgghnmggngthtttt"
// },
// {
//     "id":"64",
//     "titulo":"algo5",
//     "descricao":"lorem uahfshjfhjhfhdsfbgghnmggngthtttt"
// }
]

// criar
function criar_tarefa(titulo, descricao) {
    if(titulo === "" ||  descricao === ""){
        // verifica  se titulo ou descriçao vazios
        console.log(`titulo ou descricao vazios, titulo:${titulo},descrição:${descricao}`)
        return
    }
    if(titulo.match(/^[0-9]+$/) != null){
        //verifica se somente tem numeros 
        console.log("titulo somente com numeros")
        return
    }
    if(titulo.length < 4){
        // verifica se titulo tem menos que 4 caracteres
        console.log("titulo com menos de 4 caracteres")
        return
    }
    if(descricao.length < 20){
        // verifica se descrica tem menos que 20 caracteres
        console.log("descricao com menos de 20 caracteres")
        return
    }
    if(dados.findIndex(x => x.titulo === titulo) !== -1){
        // verifica se titulo ja existe
        console.log("titulo ja existente")
        return
    }
    const id = Math.floor( Math.random() * 1000)

    dados.push(
        {id,titulo,descricao}
    )
    escreve_tabela(dados)
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
        escreve_tabela(dados)
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
// renderiza dados na tabela
function escreve_tabela(dados) {
    const tbody = document.querySelector("#tbody")
    document.querySelectorAll("tbody").forEach(a => a.innerHTML = "")
    dados.forEach(dado => {
        const th = `
                 <tr>
                  <td>${dado.id}</td>
                  <td>${dado.titulo}</td>
                  <td>${dado.descricao}</td>
                  <td>               
                 <button class="btn btn-danger" onclick="deletar_tarefa(${dado.id})"  ng-click="delete($index)">
                    Delete
                  </button>

                  </td>
              </tr>
    `  
    tbody.insertAdjacentHTML("afterend", th)  
    })

}
// console.log()
