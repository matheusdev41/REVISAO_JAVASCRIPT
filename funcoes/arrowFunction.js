let dobro = function (a) {
    return 2 * a
}

// Função arrow - anônima 
dobro = (a) => {
    return 2 * a
}

// Funções de uma única linha return implicido
dobro = a => 2 * a
console.log(dobro(Math.PI))


let ola = function () {
    return 'Olá'
}

saudacao = () => 'Olá'
console.log(saudacao())