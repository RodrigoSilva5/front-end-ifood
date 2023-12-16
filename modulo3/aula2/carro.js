class Carro {
    #marca;
    #modelo;
    #ano;
    velocidade

    constructor(marca, modelo, ano){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano
    }
    getInfo(){
        return [this.#ano, this.#marca, this.#modelo]
    }
    acelerar(){
        this.velocidade += 2;
    }
}

const carro1 = new Carro("volkswagen","gol", 2002)

console.log(carro1.getInfo())

class CarroEsportivo extends Carro{
    #tipoEsporte
    constructor(marca, modelo, ano, tipoEsporte){
        super(marca, modelo, ano)
        this.#tipoEsporte = tipoEsporte
    }
}
