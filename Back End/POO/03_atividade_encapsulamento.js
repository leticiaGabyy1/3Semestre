class bruxa1 {

    #NivelEnergia = 100;

    constructor(nome, idade, feitico, casa, nivelMagia) {
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivelMagia = nivelMagia;
        // this.#NivelEnergia = 100;
    }
    apresentar() {
        return `${this.nome},  ${this.nivelMagia}, ${this.#NivelEnergia}`
    }
    verEnergia() {
        return this.#NivelEnergia;
    }
    lancarFeitico() {
        this.#NivelEnergia -= 10;
    }
    recarregar() {
        this.#NivelEnergia += 10;
    }
}

const bruxa = new bruxa1('Leticia', 17, 'Controlar o tempo', 'grifinória', 'avançado');
console.log(bruxa);
console.log(bruxa.verEnergia());
bruxa.recarregar();
bruxa.lancarFeitico();

