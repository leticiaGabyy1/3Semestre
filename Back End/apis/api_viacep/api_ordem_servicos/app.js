import express from 'express';
import {BD, testarConexao} from './db.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js'
import rotasDepartamentos from './src/routes/rotasDepartamentos.js'
import rotasOrdemServico from './src/routes/rotasOrdemServico.js'

//usando swagger
import swaggerUi from 'swagger-ui-express'
import documentacao from './config/swagger.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use('/swagger',swaggerUi.serve, swaggerUi.setup(documentacao))
app.use(cors())

app.get('/', async(req,res) => {
    await testarConexao();
   res.redirect('/swagger')

})

//utilizando rotas 
app.use(rotasUsuarios);
app.use(rotasDepartamentos);
app.use(rotasOrdemServico);

const porta = 3000;
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
    
})

