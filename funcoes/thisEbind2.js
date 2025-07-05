class Pessoa {
    constructor() {
        this.idade = 0

        const self = this
        setInterval(function () {
            this.idade++
            console.log(self.idade)
        }.bind(this), 2000)
    }
}
