// https://github.com/Dev4ster/ada-turma-1094-POO-ts/blob/main/aula-6/desafio.md
// opção 1

class Cliente{
    historico_de_pedidos
    nome;
    endereço;
    constructor(nome, endereço){
        this.nome = nome;
        this.endereço = endereço;
        this.historico_de_pedidos = []
    }
    fazerPedido(pedido){
        this.historico_de_pedidos.push([pedido.itens, pedido.exibirStatus()])
        pedido.restaurante.receberPedido(this.nome, pedido)

    }
    consultarPedidos(){
        return this.historico_de_pedidos
    }
}

class Restaurante{
    pedidos = [];
    nome;
    #menu;
    // {
    //     Pizza: 15,
    //     Hamburguer: 10,
    //     Salada: 8,
    //   }
    constructor(nome, menu){
        this.nome = nome;
        this.#menu = menu
    }
    exibirMenu(){
        return this.#menu
    } 
    receberPedido(cliente, pedido){
        const tempo_de_entrega = Math.floor(Math.random() * 10000)
        this.pedidos.push([cliente, pedido.itens])
        pedido.atualizarStatus("em andamento")
        setTimeout(()=> {
            pedido.atualizarStatus("entregue")
            console.log("pedido entregue")
        }, tempo_de_entrega)

        console.log(`Pedido em andamento, em ${tempo_de_entrega} milisegundos sera entregue`)

    }
}

class Pedido{
    cliente;
    restaurante;
    itens; 
    // (pendente, em andamento, entregue)
    #status; 
    #total;
    constructor(restaurante, itens){
        this.restaurante = restaurante;
        this.itens = itens;
        this.#status = "pendente"
    }
    calcularTotal(){
        let valor = 0
        const menu = this.restaurante.exibirMenu()
        for (const item in menu) {
            if (Object.hasOwnProperty.call(menu, item)) {
                const element = menu[item];
                valor += this.itens[item] * element
            }
        }
        this.#total = valor
        return this.#total
    }
    atualizarStatus(status){
        // status pendente, em andamento, entregue
        this.#status = status
    }
    exibirStatus(){
        return this.#status
    }
}
const restaurante1 = new Restaurante("ala via", {
    Pizza: 15,
    Hamburguer: 10,
    Salada: 8,
  })
const pedido1 = new Pedido(restaurante1, {
    Pizza: 2,
    Hamburguer: 2,
    Salada: 2,
  })

const cliente1 = new Cliente("rodrigo", "rua A")

// exibi menu
console.log(restaurante1.exibirMenu())
// faz pedido
cliente1.fazerPedido(pedido1)
// consulta pedidos do cliente
console.log(cliente1.consultarPedidos())
// calcula valor do pedido
console.log(pedido1.calcularTotal())

// console.log(pedido1.calcularTotal())