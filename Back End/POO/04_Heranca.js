class Pessoa{
    nome;
    constructor(nome){
        this.nome = nome
    }

    apresentar(){
        return `${this.nome}`;
    }
}

class PessoaFisica extends Pessoa{
    cpf;
    constructor(nome, cpf){
        super(nome);
        this.cpf = cpf;
    }
}

class PessoaJuridica extends Pessoa{
    cnpj;
    constructor(nome, cnpj){
        super(nome);
        this.cnpj = cnpj;
    }
}

const leticia = new PessoaFisica("leticia","542.677.448-07");
console.log(leticia.apresentar());
console.log(leticia.cpf);


const sesi = new PessoaJuridica("SESI-ANDRADINA","12.345.678/0001-90");
console.log(sesi.apresentar());



