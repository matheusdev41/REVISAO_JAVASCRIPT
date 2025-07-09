Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}



const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 42.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços 

// Converte string JSON em objeto
const paraObjeto = json => JSON.parse(json)

// Pega apenas o preço
const apenasPreco = produto => produto.preco

// Encadeia os maps
const precos = carrinho.map2(paraObjeto).map2(apenasPreco)
//const total = precos.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(precos)
//console.log(total)