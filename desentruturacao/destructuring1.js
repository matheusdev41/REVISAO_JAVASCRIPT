// novo recurso do ES2014


const Pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = Pessoa // Tire de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade)

const {nome: n, idade: i} = Pessoa // Tire de dentro do objeto pessoa os atributos nome e idade e crie variáveis para representálos
console.log(n, i)


const {sobrenome, bemHumorada = true} = Pessoa

console.log(sobrenome, bemHumorada)


const {endereco: {logradouro, numero, cep}} = Pessoa
console.log(logradouro, numero, cep)