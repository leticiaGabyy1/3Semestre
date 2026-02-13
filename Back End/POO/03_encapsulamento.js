class Pessoa {
    //Atributo privado
    #documento;

   //Atributo publico
   nome;
   idade;

   constructor(nome, idade, documento){
    this.nome = nome;
    this.idade = idade;
    this.#documento = documento;
   }

   apresentar(){
      return `${this.nome}, ${this.idade}`
   }
}

const Pessoa1 = new Pessoa('Marcos', 17, '54267744807');
console.log(Pessoa1);


