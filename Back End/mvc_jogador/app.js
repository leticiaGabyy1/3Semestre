import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import rotasJogador from './routes/rotasJogador.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true}));


app.use(rotasJogador)

app.get('/', (req, res) =>{
    res.redirect('/jogador');
});


const porta = 3000;
app.listen(porta, () =>{
    console.log(`Servidor http://localhost:${porta}`)
})