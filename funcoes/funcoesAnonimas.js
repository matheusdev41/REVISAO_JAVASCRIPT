const soma = function (x, y) {
    return x + y 
}

const subtrair = function (x, y) {
    return x - y 
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(4, 6, subtrair)

imprimirResultado(6, 5, function (x, y) {
    return x * y
})

imprimirResultado(12, 3, (x, y) => x / y)

const Pessoa = {
    falar: function () {
        console.log('opa')
    }
}

Pessoa.falar()