console.log(typeof Array, typeof new Array, typeof [])

// Forma não recomendada 
let aprovados = new Array('Matheus', 'Márcio', 'Lucas')
console.log(aprovados)

// Notação literal 
aprovados = ['Vinicius', 'Junior', 'Carlos']
console.log(aprovados)
console.log(aprovados[0])

// Adicionando elementos 
aprovados[3] = 'André' 
console.log(aprovados)

// Método mais apropriado 
aprovados.push('Laura')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
// Ordenação do Array
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
// Função splice serve para remover e adicionar elementos no array
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2')
console.log(aprovados)