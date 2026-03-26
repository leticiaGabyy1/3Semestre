import jogador from "../models/jogador.js"

let listaJogador = [
   //(id, nivel, nome, pontuacao)
    new jogador(1, "Marcos", "Avançado", 400),
    new jogador(2, "Gabriella", "Médio", 288),
    new jogador(3, "Maria clara", "baixo", 100),
]

const jogadorController = {
    listar: (req, res) => {
    res.render("jogador", { jogador: listaJogador });
    },
    adicionar: (req, res) => {
        const { nome, nivel,pontuacao} = req.body;

        try{
        
           const novoJogador = new jogador(
   listaJogador.length + 1,
   nome,
   nivel,
   Number(pontuacao)
);
            listaJogador.push(novoJogador);
            res.redirect('/jogador');
        }catch(e)
        {
          res.status(400).render('jogador.ejs', { jogador:listaJogador,erro: e.message});
        }
        
    },
        marcarPontuacao: (req, res) =>{
            const {id} = req.body;
            const jogador = listaJogador.find( l => l.id === Number(id) )
            jogador.marcarPontuacao();
            res.redirect('/jogador');

        }
    }

export default jogadorController;