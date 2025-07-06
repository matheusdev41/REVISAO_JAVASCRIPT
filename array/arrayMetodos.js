const pilotos = ['Vettel', 'Alonso', 'Raykkonen', 'Massa']
pilotos.pop() // Remove o último elemento 
console.log(pilotos.length)

pilotos.push('Massa')
console.log(pilotos)

pilotos.shift() // Remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona na primeira posição
console.log(pilotos)

pilotos.splice(0, 0, 'Bottas', 'Alonso')
console.log(pilotos)

pilotos.splice(2, 1)
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // Novo array gerado a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
console.log(pilotos)

pilotos.splice(1, 1, 'Vettel')
console.log(pilotos)