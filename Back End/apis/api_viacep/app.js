import express from 'express';
import router from './api_ordem_servicos/app';

const app = express();

app.use('/dogs', express.static('public'))

app.get('/', async (req, res) => {
    res.status(200).json("API Funcionando");
})

app.get('/cep/:codigo', async (req, res) => {
    const codigo = req.params.codigo;

    const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`)
    const dados = await resposta.json();

    const cidade = dados.localidade;
    const estado = dados.uf;

    //res.json(dados);
    res.status(201).json({ cidade, estado })
})

app.get('/starwars/personagem/:id', async (req, res) => {
    const { id } = req.params;

    const resposta2 = await fetch(`https://swapi.dev/api/people/${id}`)
    const dados = await resposta2.json();

    const resultado = {
        nome: dados.name,
        altura: dados.height,
        peso: dados.mass,
        cor_olhos: dados.eye_color
    }

    //res.json(dados);
    res.json(resultado)
})

app.get('/dog/:id', async(req, res) => {
    const id = req.params.id;
    const url = await fetch(`https://http.dog/${id}.jpg`);
    
    res.json({ url });
})


const porta = 3000;
app.listen(porta, () => {
    console.log(`servidor rodando http://localhost:${porta}`);


})

