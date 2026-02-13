import Livro from "../models/Livro.js "

//vetor de objetos de Livros

let listaLivros = [
    new Livro(1, "O alienista", "Machado de Assis", 95),
    new Livro(2, "Dom Casmurro", "Machado de Assis", 288),
    new Livro(3, "Harry Potter e a pedra filosofal", "J.K Rowling", 300),
]

const livroController = {
    listar: (req, res) => {
        res.render('livros.ejs', {livros: listaLivros})
    },
    adicionar: (req, res) => {
        const {titulo, autor, paginas} = req.body;

        try{
            //Construção de um novo objeto, utilizando a classe Livro
            const novoLivro = new Livro(
                listaLivros.length + 1,
                titulo,
                autor,
                Number(paginas)
             
            );

            listaLivros.push(novoLivro);
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

export default livroController;