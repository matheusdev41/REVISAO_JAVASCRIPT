Array.prototype.meuForEach = function(callback) {
    for (let i = 0; i < this.length; i++){
        // O callback recebe (valor, indice, array)
        callback(this[i], i, this)
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.meuForEach(function(nome, indice, array) {
    console.log(`${indice + 1} ${nome}`)
})
