//Função anônima

const saudacao2 = function (nome){
    console.log(`Tenha um bom dia ${nome}`);
    
}
saudacao2('Let');

//Arrow Function

const saudacao3 = (nome) => {

   console.log(`Tenha um bom dia ${nome}`);
    

}
saudacao3('Senhora Leticia');

//Função anônima Soma2

const soma2 = function (n1,n2){
    let resultado = n1 + n2;
    console.log(` ${resultado}`);
    
}
soma2(10,7);

//Arrow Function de Soma3

const soma3 =  (n1,n2) =>{
    let resultado = n1 + n2;
    console.log(` ${resultado}`);
    
}
soma3(7,10);


