const altura_string  = window.prompt("Digite sua altura em com virgula").replace(",", ".")
const peso = Number(window.prompt("digite seu peso sem virgula"))
let IMC = peso / (Number(altura_string) * Number(altura_string))
let promper = ""

if(IMC >= 40){
    promper = ("Obesidade grau 3")        
}else if(IMC > 35 && IMC < 39.9){
    promper =("Obesidade grau 2")        
}else if(IMC > 30 && IMC < 34.9){
    promper =("Obesidade grau 1")        
}else if(IMC > 25 && IMC < 29.9){
    promper =("Sobrepeso")        
}else if(IMC > 18.5 && IMC < 24.9){
    promper = "Peso normal"     
}else if(IMC < 18.5){
    promper = ("Baixo peso")   
}

 console.log("seu IMC é", IMC.toFixed(1), promper)