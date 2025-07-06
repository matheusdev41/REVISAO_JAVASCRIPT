const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return  e * 2
})

// Função arrow tem um retorno implícito
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`


// Retorno das funções associadas ao map de forma encadeada
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
