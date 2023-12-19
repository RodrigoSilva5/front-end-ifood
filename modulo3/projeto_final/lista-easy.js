class Hotel{
    nome;
    lista_de_quartos = []
    constructor( nome, lista_de_quartos = []){
        this.lista_de_quartos = lista_de_quartos;
        this.nome = nome
    }
    adicionaQuarto(quarto){
        const numero = Math.floor(Math.random() * 10000)
        quarto.numero = numero
        this.lista_de_quartos.push(quarto)

        return numero
    }
    QuartosDisponiveis(){
        let disponiveis = []
        this.lista_de_quartos.forEach((quarto)=> {
            if(quarto.disponivel === true){
                disponiveis.push(quarto)
            }
        })

        return disponiveis
    }

    confirmarReserva(numero, hospede){
        const quarto = this.lista_de_quartos.find((quarto)=> quarto.numero === numero)
        if(quarto === undefined){
            console.log(`quarto não encontrado`)
        }else if(quarto.disponivel === false){
            console.log(quarto, "quarto encontrado e indisponivel")
        }else{
            console.log("quarto reservado com sucesso ")
            quarto.disponivel = false
            quarto.hospede = hospede
        }
    }
    encerrarReserva(numero){
        const quarto = this.lista_de_quartos.find((quarto)=> quarto.numero === numero)
        if(quarto === undefined){
            console.log("Reserva não encerrada, quarto não encontrado")
            return
        }
        if(quarto.disponivel === true){
            console.log('quarto ja disponivel')
            quarto.hospede.delete()
            return
        }
        quarto.disponivel = true 
        delete quarto.hospede

    }
    
}

class Quarto{
    numero;
    tipo;
    // status de disponibilidade
    disponivel;
    constructor(tipo, disponivel = true){
        this.tipo = tipo;
        this.disponivel = disponivel;
    }

}
class Hospede{
    static lista_de_hospedes = []
    nome
    constructor(nome){
        this.nome = nome
        this.constructor.lista_de_hospedes.push(nome)
    }

    mostrarListaHospedes(){
        return this.constructor.lista_de_hospedes
    }
}

class Reserva{
    hospede;
    hotel;
    numero;
    constructor(hospede, hotel , numero){
        this.hospede = hospede
        this.hotel = hotel;
        this.numero = numero
    }

    reservarQuarto(){
        this.hotel.confirmarReserva(this.numero, this.hospede)
    }
}
const hotel1 = new Hotel("ver a vista")
const quartodamalda = hotel1.adicionaQuarto(new Quarto("CASAL", true))
const hospede1 = new Hospede("rod")
const reserva1 = new Reserva(hospede1.nome, hotel1, quartodamalda)
 hotel1.adicionaQuarto( new Quarto("DUPLO"))
 hotel1.adicionaQuarto( new Quarto("DUPLO",false))
 hotel1.adicionaQuarto( new Quarto("DUPLO", true)) 
 hotel1.adicionaQuarto( new Quarto("DUPLO", true))

hotel1.adicionaQuarto( new Quarto("casal"))

hotel1.adicionaQuarto( new Quarto("sla"))
reserva1.reservarQuarto()
console.log(hotel1.lista_de_quartos )
hotel1.encerrarReserva(quartodamalda)
// console.log(quartodamalda)
// hotel1.adicionaQuarto(Quarto1)
// console.log(hotel1.QuartosDisponiveis())
// console.log(hotel1.lista_de_quartos )

console.log(hospede1.mostrarListaHospedes())
