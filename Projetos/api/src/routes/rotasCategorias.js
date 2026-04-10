import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os categorias
router.get('/categorias', async (req, res) => {
    try {

        //cria uma variavel para enviar o comando sql
        const comando = `SELECT * FROM categorias WHERE ativo = true`

        //cria uma variavel para receber o retorno do sql
        const categorias = await BD.query(comando);

        //retorno para a pagina, o json com os dados
        //buscados do sql
        return res.status(200).json(categorias.rows);//200 ok
    } catch (error) {
        console.error('Erro ao listar categorias', error.message);
        return res.status(500).json({ error: 'Erro ao listar categorias' })
    }
})

//Endpoint seguro contra sql Injection
router.post('/categorias', async (req, res) => {
    const {nome ,descricao, tipo, cor, icone, } = req.body;
    try {

        const comando = `INSERT INTO categorias(nome, descricao, tipo, cor, icone) VALUES($1, $2, $3, $4, $5)`
        const valores = [nome, descricao, tipo, cor, icone, ];

        await BD.query(comando, valores)
        console.log(comando, valores);

        return res.status(201).json("Categoria cadastrada.");
    } catch (error) {
        console.error('Erro ao cadastrar categorias', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar categorias' })
    }
})

// endpoint para atualizar um unico usuário
// recebendo o parametro pelo id e buscando o categoria
router.put('/categorias/:id_categoria', async (req, res) => {
    // Id recebido via parametro
    const { id_categoria } = req.params;

    // Dados do categoria recebido via Corpo da página
    const { nome, descricao, tipo, cor, icone} = req.body;
    try {
        //Verificar se o categoria existe
        const verificarcategoria = await BD.query(`SELECT * FROM categorias
            WHERE id_categoria = $1 and ativo = true`, [id_categoria])
        if (verificarcategoria.rows.length === 0) {
            return res.status(404).json({ message: 'categoria não encontrado' })
        }
        const saltRounds = 10
        //gerando o hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)

        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE categorias SET ativo = false WHERE id_categoria = $1`;
        const valores = [nome, descricao, tipo, cor, icone];
        await BD.query(comando, valores);

        return res.status(200).json('categoria foi atualizado!');
    } catch (error) {
        console.error('Erro ao atualizar usuários', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar categorias' })
    }
})

//Rota patch atualizando parcialmente as informações
router.patch('/categorias/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    const { nome,descricao, tipo, cor, icone  } = req.body;

    try {
        //Verificar se o categoria existe
        const verificarcategoria = await BD.query(`SELECT * FROM categorias
            WHERE id_categoria = $1`, [id_categoria])
        if (verificarcategoria.rows.length === 0) {
            return res.status(404).json({ message: 'categoria não encontrado' })
        }

        //Montar o update dinamicamente(apenas campos enviados)
        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }
        if (descricao !== undefined) {
            campos.push(`descricao = $${contador}`);
            valores.push(descricao);
            contador++;
        }
        if (cor !== undefined) {
            campos.push(`cor = $${contador}`);
            valores.push(cor);
            contador++;
        }
        if (cor !== undefined) {
            campos.push(`tipo = $${contador}`);
            valores.push(tipo);
            contador++;
        }
        if (cor !== undefined) {
            campos.push(`icone = $${contador}`);
            valores.push(icone);
            contador++;
        }

        //se nenhum campo foi enviado
        if (campos.length === 0) {
            return res.status(400).json({ message: "Nenhum campo a atualizar" })
        }

        //Adicionando ID ao final de valores
        valores.push(id_categoria)

        //montando a query dinamicamente
        const comando = `UPDATE categorias SET ${campos.join(', ')} WHERE id_categoria = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('Usuário atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar categoria', error.message)
        return res.status(500).json({ message: "Erro interno so servidor" + error.message })
    }
})

router.delete('/categorias/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    try {
        //Executa o comando de update
        const comando = `UPDATE categorias SET ativo = false WHERE id_categoria = $1 `
        await BD.query(comando, [id_categoria])
        return res.status(200).json({ message: "categoria removido com sucesso" })
    } catch (error) {
        console.error('Erro ao atualizar categoria', error.message)
        return res.status(500).json({ message: "Erro interno so servidor" + error.message })
    }
})


export default router