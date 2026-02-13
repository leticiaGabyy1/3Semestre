class bruxa{

    #NivelEnergia = 100;

    constructor(nome, nivelMagia, casa) {
        this.nome = nome;
        this.nivelMagia = nivelMagia;
        this.casa = casa;
    }
   
}
    class bruxaSonserina extends bruxa{
    nivelMagia;
    constructor(nome, nivelMagia, casa){
        super(nome, nivelMagia,casa);
       this.nivelMagia = 100;
    }
}

class bruxaGrifinoria extends bruxa{
 lancarFeitico  ;
    constructor(nome,nivelMagia, lancarFeitico, casa){
        super(nome, lancarFeitico, casa, nivelMagia);
        this.lancarFeitico = lancarFeitico;
    
    }
}
    

const bruxa1 = new bruxaSonserina('Leticia', 'avançado', "sonserina");

console.log(bruxa1);


const bruxa2 = new bruxaGrifinoria('Livia','média','fogo, ','grifinória');

console.log(bruxa2);

