const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]


// Todos os alunos são bolsistas?
const todosBolsistas = alunos.reduce(function (acumulador, aluno) {
    return acumulador && aluno.bolsista
}, false)

console.log(todosBolsistas)


// Algum aluno é bolsista?
const algumAlunoBolsista = alunos.reduce(function (acumulador, aluno) {
    return acumulador || aluno.bolsista
}, false)

console.log(algumAlunoBolsista)