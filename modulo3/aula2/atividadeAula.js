class Autor{
    #nome
    #nacionalidade
    constructor(nome, nacionalidade){
        this.#nome = nome
        this.#nacionalidade = nacionalidade
    }
    exibirDetalhes(){
        return [this.#nome, this.#nacionalidade]
    }
}

const henrique = new Autor("HENRIQUE", "argentino")

class Livro{
    constructor(titulo, anoPublicaçao, Autor){
        this.titulo = titulo;
        this.anoPublicaçao = anoPublicaçao;
        this.autor = Autor.exibirDetalhes();
    }

    exibirDetalhes(){
        return [this.titulo, this.anoPublicaçao, this.autor]
    }
}

const livro1 = new Livro("TITULO",2002, henrique)
const livro2 = new Livro("TITULO2",2005, henrique)

// console.log(livro1.exibirDetalhes())
class Biblioteca{
     #listaLivros = []

    adicionarLivro(livro){
        this.#listaLivros.push(livro)
    }
    mostrarLivros(){
        return this.#listaLivros
    }
    buscarLivroPorAutor(autor){
        const resultados  = []
            this.#listaLivros.forEach(livroItem => {
                if(autor === livroItem.autor[0]){
                    resultados.push(livroItem)
                }else{
                    return `autor não encontrado`
                }
            });
        return resultados
    }
}

const biblioteca1 = new Biblioteca()
biblioteca1.adicionarLivro(livro1)
biblioteca1.adicionarLivro(livro2)

const livrosDoFulano = biblioteca1.buscarLivroPorAutor("HENRIQUE")

// console.log( livrosDoFulano)