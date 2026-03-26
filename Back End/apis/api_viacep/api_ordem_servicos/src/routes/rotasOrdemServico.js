import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//criando o endpoint para listar os ordens

router.get('/ordem_servicos', async (req, res) => {
    try {
        const query = `SELECT * FROM ordem_servicos ORDER BY id_ordem`
        const ordem = await BD.query(query);
        res.status(200).json(ordem.rows)

    } catch (error) {
        console.log('Erro ao listar ordens', error.message);
        res.status(500).json({ error: 'Erro ao listar ordens' })

    }

})

router.post('/ordem_servicos', async (req, res) => {
    const { id_usuario, id_departamentos, nr_ordem, titulo, descricao, prioridade, status, data } = req.body;

    try {
        const comando = `INSERT INTO ordem_servicos (id_usuario, id_departamentos, nr_ordem, titulo, descricao, prioridade, status, data     ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
        const valores = [id_usuario, id_departamentos, nr_ordem, titulo, descricao, prioridade, status, data];
        await BD.query(comando, valores);
        res.status(201).json({ message: 'Ordem de serviço cadastrada com sucesso' });
    } catch (error) {
        console.log('Erro ao cadastrar ordem de serviço', error.message);
        res.status(500).json({ error: 'Erro ao cadastrar ordem de serviço' });
    }
});

router.put('/ordem_servicos/:id_ordem', async (req, res) => {
    const { id_ordem } = req.params;
    const { id_usuario, id_departamentos, nr_ordem, titulo, descricao, prioridade, status, data } = req.body;

    try {
        const comando = `UPDATE ordem_servicos SET id_usuario = $1, id_departamentos = $2, nr_ordem = $3, titulo = $4, descricao = $5, prioridade = $6, status = $7, data = $8 WHERE id_ordem = $9`;
        const valores = [id_usuario, id_departamentos, nr_ordem, titulo, descricao, prioridade, status, data, id_ordem];
        await BD.query(comando, valores);
        res.status(200).json({ message: 'Ordem de serviço atualizada com sucesso' });
    } catch (error) {
        console.log('Erro ao atualizar ordem de serviço', error.message);
        res.status(500).json({ error: 'Erro ao atualizar ordem de serviço' });
    }
});

router.patch('/ordem_servicos/:id_ordem', async (req, res) => {
    const { id_ordem } = req.params;
    const { nr_ordem, titulo, data } = req.body;

    try {
        const comando = `UPDATE ordem_servicos SET id_usuario = $1, id_departamentos = $2, nr_ordem = $3, titulo = $4, descricao = $5, prioridade = $6, status = $7, data = $8 WHERE id_ordem = $9`;
        await BD.query(comando, id_ordem);
        res.status(200).json({ message: 'Ordem de serviço atualizada com sucesso' });

        const campos = []
        const valores = []
        let contador = 1

        if (nr_ordem !== undefined) {
            campos.push(`nr_ordem = $${contador}`)
            valores.push(nr_ordem)
            contador++;
        }
        if (titulo !== undefined) {
            campos.push(`titulo = $${contador}`)
            valores.push(titulo)
            contador++;
        }
        if (data !== undefined) {
            campos.push(`data = $${contador}`)
            valores.push(data)
            contador++;
        }

        if (campos.length === 0) {
            return res.status(400).json({ message: "Nenhum campo a ser atualizado" })
        }

        valores.push(id_ordem)
    } catch (error) {
        console.log('Erro ao atualizar ordem de serviço', error.message);
        res.status(500).json({ error: 'Erro ao atualizar ordem de serviço' });
    }
});

export default router