const [a] = [10]
console.log(a)

const [na, nb, nc] =  [10, 20, 30]
console.log(nb)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]

console.log(n1)
console.log(n3)
console.log(n5)
console.log(n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)