class brancadeNeve {
    constructor(nome, idade, poder) {
        this.nome = nome;
        this.idade = idade;
        this.poder = poder;
    }
}

class feliz extends brancadeNeve {
    constructor(nome, idade, poder, animal) {
        super(nome, idade, poder,animal );
        this.anao1=anao1
    }
}
 

class dengoso extends brancadeNeve {
    constructor(nome, idade, poder, habilidade) {
        super(nome, idade, poder, habilidade );
         this.anao2=anao2;
         this.habilidade = habilidade;
    }
}

class dunga extends brancadeNeve {
  carisma() {
    console.log(`${this.nome} carismatico e mimado`);
  }
}

class soneca extends brancadeNeve {
  sono() {
    console.log(`${this.nome} dorminhoco!`);
  }
}


class mestre extends brancadeNeve {
  lider() {
    console.log(`${this.nome} liderança!`);
  }
}


const anao1 = new brancadeNeve ("leticia", 18, "velocidade", );
console.log(anao1);

const anao2 = new brancadeNeve ("isadora", 20, "Gigante");
console.log(anao2);

const anao3 = new brancadeNeve ("livia", 28, "pequeno");
console.log(anao3);
