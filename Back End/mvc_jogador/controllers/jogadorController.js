import Livro from "../models/jogador.js"



let listaJogador = [
    new Jogador(1, "Marcos", "Avançado", 400),
    new Jogador(2, "Gabriella", "Médio", 288),
    new Jogador(3, "Maria clara", "baixo", 100),
]

const jogadorController = {
    listar: (req, res) => {
        res.render('jogador.ejs', {jogador: listaJogador})
    },
    adicionar: (req, res) => {
        const { nome, nivel,pontuacao} = req.body;

        try{
            //Construção de um novo objeto, utilizando a classe Livro
            const novoLivro = new Livro(
               listaJogador.length + 1,
                nivel,
                nome,
                Number(pontuacao)
             
            );

            listaJogador.push(novoLivro);
            res.redirect('/livros');
        }catch(e)
        {
          res.status(400).render('livros.ejs', {lista:listaLivros,erro: e.message});
        }
        
    },
        marcarComoLido: (req, res) =>{
            const {id} = req.body;
            const livro = listaLivros.find( l => l.id === Number(id) )
            livro.marcarComoLido();
            res.redirect('/livros');

        }
    }

export default jogadorController;