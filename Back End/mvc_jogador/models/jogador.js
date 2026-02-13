class jogador{
   constructor(id,nivel,nome,pontuacao){
    if(!pontuacao || !nome){
        throw new Error('Nome ou pontuação são obrigatórios')
    }
    this.id = id;
    this.nivel = nivel;
    this.nome = nome;
    this.pontuacao = pontuacao;
   }
   descricao(){
    return `${this.nivel} - ${this.nome}`
   }
   verificarNivel(){
    if(this.pontuacao <= 150) return 'nivel baixo';
    if(this.pontuacao <= 300) return 'nivel médio';
    return 'nivel avançado';
   }

   
}


export default jogador