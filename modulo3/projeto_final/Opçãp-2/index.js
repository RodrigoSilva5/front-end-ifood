// opção 2 
// https://github.com/Dev4ster/ada-turma-1094-POO-ts/blob/main/aula-6/desafio.md

class Personagem{
    nome;
    pontuacao;
    posicao;
    constructor(nome, pontuacao, posicao){
        this.nome = nome;
        this.pontuacao = pontuacao;
        this.posicao = posicao;
    }

    mover(direcao){

    }
    coletarItem(item){
        
    }
    derrotarInimigo(Inimigo){

    }
    calcularPontucao(){

    }

}

class Inimigo{
    tipo 
    nivelDificuldade
    pontos
    constructor(tipo, nivelDificuldade, pontos){
        this.tipo = tipo;
        this.nivelDificuldade = nivelDificuldade;
        this.pontos = pontos;
    }
}

class Item{
    nome
    pontos
    constructor(nome, pontos){
        this.nome = nome;
        this.pontos = pontos
    }
}

class Jogo {

}