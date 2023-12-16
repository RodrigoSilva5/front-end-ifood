// 
// paradigma funcional 
const criarLivros = (titulo, autor, anoPublicacao) => {
    if(!titulo && autor && anoPublicacao){
        // algo nao fornecido 
        console.log(`algo nao fornecido`)
    }

    return {
        titulo, autor, anoPublicacao
    }
}
criarLivros("teste")

class Livro{

}
// herança, polimorfismo, encapsulamento?????
// getter setters ????