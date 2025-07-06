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
const precos = carrinho.map(paraObjeto).map(apenasPreco)
const total = precos.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(precos)
console.log(total)