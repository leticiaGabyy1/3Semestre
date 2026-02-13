class Pessoa {
    //Criando o metodo construtor
    construtor(nome,idade){
        //Atributos
        this.nome = nome;
         this.idade = idade;
    }
}

const Pessoa1 = new Pessoa("leticia",17);
console.log(Pessoa1);
const pessoa2 = new Pessoa("Marcos",17);

class bruxo{
    construtor(nome, casa, personalidade, feitico, nivelMagia){
        this.nome = nome;
        this.casa =casa;
        this.personalidade = personalidade;
        this.feitico = feitico;
        this.nivelMagia = nivelMagia;
     
    }
}

const harry = new bruxo("Harry", 17, "Expelliarmus", "grifinoria", 1);
console.log(harry);

