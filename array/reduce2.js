const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const apenasNotas = alunos => alunos.nota
const somaNotas = function(acumulador, atual) {
    return acumulador + atual
}

const resultado = alunos.map(apenasNotas).reduce(somaNotas)
console.log(resultado)
