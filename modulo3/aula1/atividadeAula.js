// atividade 1 Criar uma classe Pessoa com propriedades como nome, idade e cidade, e métodos para calcular a idade em anos bissextos.

class Pessoa{
    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }

    calcularIdadeBissextos(anoAtual){
        const idade = anoAtual - ( new Date().getFullYear() - this.idade)
        return idade
    }
}
const pessoa1 = new Pessoa('rod', 21, "ara")

// console.log(pessoa1.calcularIdadeBissextos(2024))

// atividade 2 Criar uma hierarquia de classes para representar animais, com classes específicas para mamíferos e aves.

class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
}

class Mamifero extends Animal{

    eleAmamenta(){
        return true
    }
}


class Ave extends Animal{
    eleVoa(){
        return true
    }
}

const passaro = new Ave("gaivota" , "ave")
const baleia = new Mamifero("baleia", "aquatico")
// console.log(passaro.eleVoa(), baleia.eleAmamenta())

// atividade 3 Implementar uma classe Carro com métodos para ligar, desligar, acelerar e frear.
class Carro {
    #ligado
    #velocidade = 0 
    constructor(modelo, ano, ligado){
        this.modelo = modelo;
        this.ano = ano;
        this.#ligado = ligado
    }

    ligar(){
        this.#ligado = true
    }
    desligar(){
        this.#ligado = false
    }
    acelerar(){
        this.#velocidade++
    }
    frear(){
        this.#velocidade--
    }
    status(){
        return `Ligado: ${this.#ligado},Velocidade: ${this.#velocidade}`
    }
}

const gol = new Carro("gol", "1999", true)
// gol.acelerar()
// gol.desligar()
// console.log(gol.status())