import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//criando o endpoint para listar os departamentos

router.get('/departamentos', async (req, res) => {
    try {
        const query = `SELECT * FROM departamentos ORDER BY id_departamentos`
        const departamentos = await BD.query(query);
        res.status(200).json(departamentos.rows)

    } catch (error) {
        console.log('Erro ao listar departamentos', error.message);
        res.status(500).json({ error: 'Erro ao listar departamentos' })

    }
})

router.post('/departamentos', async (req, res) => {
    const { nome, descricao } = req.body;

    try {
        const comando = `INSERT INTO departamentos (nome, descricao) VALUES ($1, $2)`;
        const valores = [nome, descricao];
        await BD.query(comando, valores);
        res.status(201).json({ message: 'Departamento cadastrado com sucesso' });
    } catch (error) {
        console.log('Erro ao cadastrar departamento', error.message);
        res.status(500).json({ error: 'Erro ao cadastrar departamento' });
    }
});

router.put('/departamentos/:id_departamentos', async (req, res) => {
    const { id_departamentos } = req.params;
    const { nome, descricao } = req.body;

    try {
        const comando = `UPDATE departamentos SET nome = $1, descricao = $2 WHERE id_departamentos = $3`;
        const valores = [nome, descricao, id_departamentos];
        await BD.query(comando, valores);
        res.status(200).json({ message: 'Departamento atualizado com sucesso' });
    } catch (error) {
        console.log('Erro ao atualizar departamento', error.message);
        res.status(500).json({ error: 'Erro ao atualizar departamento' });
    }
});

router.patch('/departamentos/:id_departameto', async (req, res) => {
    const { id_departamentos } = req.params
    const { nome } = req.body

    try {
        const verificarDeparmento = await BD.query(`SELECT * FROM departamentos WHERE id_departamentos = $1`, [id_departamentos])
        if (verificarDeparmento.rows.length === 0) {
            return res.status(404).json({ message: 'Departamento não encontrado' })
        }

        const campos = []
        const valores = []
        let contador = 1

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`)
            valores.push(nome)
            contador++;
        }

        if (campos.length === 0) {
            return res.status(400).json({ message: "Nenhum campo a ser atualizado" })
        }

        valores.push(id_departamentos)

        const comando = `UPDATE departamentos SET ${campos.join(", ")} WHERE id_departamentos = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json("Departamento atualizado com sucesso")

    } catch (error) {
        console.error('Erro ao atualizar departamento', error.message)
        res.status(500).json({ message: "Erro interno no servidor" + error.message })
    }
})

router.delete("deparmentos/:id_departamentos", async (req, res) => {
    const { id_usuario } = req.params
    try {
        const comando = `DELETE FROM deparmentos WHERE id_deparmentos = $1`
        await BD.query(comando, [id_usuario])
        return res.status(200).json({ message: "Departamento removido com sucesso" })
    } catch (error) {
        console.error('Erro ao atualizar departamento', error.message)
        res.status(500).json({ message: "Erro interno no servidor" + error.message })
    }
})





export default router