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
        const buscaQuarto = this.lista_de_quartos.find((quarto)=> quarto.numero === numero)
       if(buscaQuarto === undefined){
           console.log("quarto não encontrado")
           return
       }
           this.lista_de_quartos.map((quarto)=> {
               console.log(quarto.numero ===buscaQuarto.numero)
               if(quarto.numero === buscaQuarto.numero){
                console.log(quarto,this.lista_de_quartos)
                quarto.disponivel = false
               }
           })
       
    //    console.log( this.lista_de_quartos)

       
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
    nome
    constructor(nome){
        this.nome = nome
    }
}

class Reserva{
    hospede;
    hotel;
    numero;
    constructor(hospede, hotel , numero){
        this.hospede = hospede
        this.hotel = hotel;
        this.numero =numero
    }


    reservarQuarto(){
        this.hotel.confirmarReserva(this.numero, this.hospede)
    }
}
const hotel1 = new Hotel("ver a vista")
const quartodamalda = hotel1.adicionaQuarto(new Hotel("hotel566"))
const reserva1 = new Reserva("rod", hotel1, quartodamalda)
 hotel1.adicionaQuarto( new Quarto("DUPLO"))
 hotel1.adicionaQuarto( new Quarto("DUPLO",true))
 hotel1.adicionaQuarto( new Quarto("DUPLO", true)) 
 hotel1.adicionaQuarto( new Quarto("DUPLO", true))

hotel1.adicionaQuarto( new Quarto("casal"))

hotel1.adicionaQuarto( new Quarto("sla"))
reserva1.reservarQuarto()

// hotel1.adicionaQuarto(Quarto1)
// console.log(hotel1.QuartosDisponiveis())
// console.log(hotel1.lista_de_quartos )