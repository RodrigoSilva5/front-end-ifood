class SistemaDeLogin{
    #usuarios = []
    constructor(){

    }
    cadastrarUsuario(nome, senha){
        if(nome === "" || senha === "" ){
            console.log(`nome:${nome} ou senha:${senha} vazios`)
            return 
            }
            // impede cadastro de 2 nomes iguais
        for (const usuario in this.#usuarios) {
            if (Object.hasOwnProperty.call(this.#usuarios, usuario)) {
                const element = this.#usuarios[usuario];
                if(element.nome === nome){
                    console.log(`Nome: ${nome} ja cadastrado, escolha outro`)
                    return
                }
            }
        }
    const id =  Math.floor(Math.random()* 1000000) 
        this.#usuarios.push({nome, senha, id})
        console.log(`usuario ${nome} cadastrado com sucesso`)
        return id
    }
    realizarLogin(nome, senha){
       const usuario = this.#usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha)
       if(usuario === -1){
           console.log("usuario nao encontrado")
       }else{
        console.log("usuario encontrado")
        return usuario.id
       }
       console.log(find)
    } 
    exibirMensagemPersonalizada(id){
        const usuario = this.#usuarios.find(usuario => usuario.id === id)
        if(usuario === -1){
            console.log("usuario nao encontrado")
        }else{
            console.log(`Bem-vindo, ${usuario.nome}`)
        }
    }

    exibirUsuarios(){
        console.log(this.#usuarios)
    }

}

// Criando instância do sistema de login
const sistemaLogin = new SistemaDeLogin();

// sistemaLogin.cadastrarUsuario("rodrigo", "senha")
// sistemaLogin.cadastrarUsuario("rodrigo", "senha")

// // console.clear()
// const usuarioLogado = sistemaLogin.realizarLogin("rodrigo", "senha")

// sistemaLogin.exibirMensagemPersonalizada(usuarioLogado)

// sistemaLogin.exibirUsuarios()

class ConversorDeMoeda{
    constructor(taxaCambio){
        this.taxaCambio = taxaCambio
    }
    converter(valor, moedaOrigem, moedaDestino){
       return valor * this.taxaCambio
    }
}

// Criando instância do conversor de moeda
const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0

// Convertendo moeda
const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');
// console.log(`Valor convertido: ${valorConvertido} BRL`);
// Saída esperada: Valor convertido: 500.0 BRL```


class ContadorDePalavras{
    constructor(texto){
        this.texto = texto
    }

    contarPalavras(){
        return this.texto.split(" ").length
    }
}

// Criando instância do contador de palavras
const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');

// Obtendo contagem de palavras
const contagem = contadorPalavras.contarPalavras();
console.log(`Número de palavras: ${contagem}`);
// Saída esperada: Número de palavras: 5```