class bruxa{
    nome;
    constructor(nome){
        this.nome = nome
    }

    apresentar(){
        return `Olá ${this.nome}`;
    }
}

class bruxaSonserina extends bruxa{
    nivelMagia;
    constructor(nome,  nivelMagia){
        super(nome, nivelMagia);
        this.nivelMagia = nivelMagia;
    }
     apresentar(){
        return `Olá ${this.nome}, seu nivel de magia é: ${this.nivelMagia}`;
    }
}

class bruxaGrifinoria extends bruxa{
    lancarfeitico;
    constructor(nome, lancarfeitico){
        super(nome,lancarfeitico);
        this.lancarfeitico = lancarfeitico;
    }
      apresentar(){
        return `Olá ${this.nome}, seu feitiço é: ${this.lancarfeitico}`;
    }
}

const bruxa1 = new bruxaSonserina("leticia", 100);
console.log(bruxa1.apresentar());



const bruxa2 = new bruxaGrifinoria("Maria","Fogo");
console.log(bruxa2.apresentar());

