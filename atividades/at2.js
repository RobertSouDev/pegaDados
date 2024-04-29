// soma uma lista de numero 


const numero = [0, 4, 2 ,4, 7]

// function somaLista(numero){
//     let somaDeNumero = 0
//     for(let numeros of numero){
//         somaDeNumero =  somaDeNumero + numeros
//     }
//     return somaDeNumero
// }
// console.log(somaLista(numero))


// tambem podemos fazer assim 

const somaDaLista = numero.reduce((acumulador, numeroAtual)=>{
    return acumulador + numeroAtual
})

console.log(somaDaLista)
