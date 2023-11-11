let total = []
function calcular() {
    document.querySelectorAll(".inputs").forEach((a, i) => {
        total.push(Number(a.value))
        let soma = total.reduce((accumulator, currentValue) => (accumulator + currentValue));
        i == 4 ? document.querySelector("#h1").innerHTML = `sua media é ${soma/5}` : ""
    })
    // console.log(soma/5)
    
}
    