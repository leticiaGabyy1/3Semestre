import express from 'express';
import jogadorController from '../controllers/jogadorController.js'

const router = express.Router();

router.get('/jogador', jogadorController.listar);


router.post('/jogador', jogadorController.adicionar);




export default router;