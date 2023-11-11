// problema dado objeto numero cpf ou cnpj, precisa se enviar um array de objetos estilo json

const input = {
    96212360022 : "Gimpliten",
    58974774000101 : "Reidiekral",
    81651699046 : "Gimpliten",
    69252619000190 : "Xaycen",
    41667458086 : "Harparak",
    36395218000130 : "Moben",
    32745876058 : "Murod",
    82845820000149 : "Fokeo",
    40361821026 : "Vitica",
    67456628092 : "Cuifa",
    23375947000182 : "Kilve"
}

function organiza(array) {
    let PF = []
    let PJ = []

    for (const key in array) {
        if (Object.hasOwnProperty.call(input, key)) {
            // LOGICA DA SEPARAÇÃO 
            key.length > 11 ? PJ.push({ "parceirosID": key , "nome": input[key] }) : PF.push( { "parceirosID": key , "nome": input[key] } )
        }
    }
            return {
                "PF": [...PF],
                "PJ": [...PJ]
            }
}

console.log(
    organiza(input)
)