const idade = 17;

if (idade >=18) {
    console.log("Liberado, você é adulto");
    
} else if (idade >= 12 && idade < 18){
    console.log("Você é um adolescente");
    
} else if (idade < 12){
    console.log("Você é uma criança");
    

}

//Operador ternário

let tema = 'Dark';
let corFundo;
if (tema == 'dark') {
    corFundo = 'Preto';
    
}else{
  corFundo= 'Branco';
}

//condição         se Verdadeira        seNão
tema == 'dark' ?  corFundo = 'Preto' : corFundo= 'Branco';
