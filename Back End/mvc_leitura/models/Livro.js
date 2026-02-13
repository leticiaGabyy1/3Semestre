class Livro{
   constructor(id,titulo,autor,paginas){
    if(!titulo || !autor){
        throw new Error('Título ou autor são obrigatórios')
    }
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = false;
   }
   descricao(){
    return `${this.titulo} - ${this.autor}`
   }
   verificarTamanho(){
    if(this.paginas <= 150) return 'Leitura curta';
    if(this.paginas <= 300) return 'Leitura média';
    return 'Leitura longa';
   }

   marcarComoLido(){
    this.lido = true;
   }
}


export default Livro




