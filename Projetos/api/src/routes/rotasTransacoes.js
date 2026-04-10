import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuarios
router.get('/transacoes', async (req, res) => {
    try {

        //cria uma variavel para enviar o comando sql
        const comando = `
        
                    SELECT
                        t.id_transacao,
                        t.valor,
                        t.descricao,
                        TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
                        t.tipo,
                        c.nome AS nome_categoria,
                        s.nome AS nome_subcategoria
                      FROM transacoes t 
                        LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                        LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
        
        `

        //cria uma variavel para receber o retorno do sql
        const transacoes = await BD.query(comando);

        //retorno para a pagina, o json com os dados
        //buscados do sql
        return res.status(200).json(transacoes.rows);//200 ok
    } catch (error) {
        console.error('Erro ao listar transacoes', error.message);
        return res.status(500).json({ error: 'Erro ao listar transacoes' + error.message })
    }
}),

//Endpoint seguro contra sql Injection
router.post('/transacoes', async (req, res) => {
    const {nome ,valor, descricao, data_registro, data_pagamento, data_vencimento, tipo,id_categoria, id_subcategoria } = req.body;
    try {

        const comando = `INSERT INTO categorias(nome ,valor, descricao, data_registro, data_pagamento, data_vencimento, tipo, id_categoria, id_subcategoria) 
        VALUES($1, $2, $3, $4, $5, $6 ,$7 ,$8 ,$9)`
        const valores = [nome ,valor, descricao, data_registro, data_pagamento, data_vencimento, tipo,id_categoria, id_subcategoria ];

        await BD.query(comando, valores)
        console.log(comando, valores);

        return res.status(201).json("transacao cadastrada.");
    } catch (error) {
        console.error('Erro ao cadastrar transacoes', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar transacoes' })
    }
})

// endpoint para atualizar um unico usuário
// recebendo o parametro pelo id e buscando o categoria
router.put('/transacoes/:id_transacao', async (req, res) => {
    // Id recebido via parametro
    const { id_transacao } = req.params;

    // Dados do categoria recebido via Corpo da página
    const {nome ,valor, descricao, data_registro, data_pagamento, data_vencimento, tipo,id_categoria, id_subcategoria} = req.body;
    try {
        //Verificar se o categoria existe
        const verificartransacao = await BD.query(`SELECT * FROM transacoes
            WHERE id_transacao = $1 and ativo = true`, [id_transacao])
        if (verificartransacao.rows.length === 0) {
            return res.status(404).json({ message: 'transacao não encontrado' })
        }
       

        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE transacoes SET ativo = false WHERE id_transacao = $1`;
        const valores = [nome ,valor, descricao, data_registro, data_pagamento, data_vencimento, tipo,id_categoria, id_subcategoria];
        await BD.query(comando, valores);

        return res.status(200).json('transacao foi atualizado!');
    } catch (error) {
        console.error('Erro ao atualizar transacao', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar transacao' })
    }
})

router.delete('/transacoes/:id_transacoes', async (req, res) => {
    const { id_categoria } = req.params;
    try {
        //Executa o comando de update
        const comando = `UPDATE transacoes SET ativo = false WHERE id_transacoes = $1 `
        await BD.query(comando, [id_categoria])
        return res.status(200).json({ message: "Transação removido com sucesso" })
    } catch (error) {
        console.error('Erro ao atualizar transacoes', error.message)
        return res.status(500).json({ message: "Erro interno so servidor" + error.message })
    }
})
router.get('/transacoes/periodo', async (req, res) => {
    const {inicio, fim} = req.query;
    try {
        if(!inicio || !fim){
            return res.status(400).json({message:'Informe as datas de Inicio e Fim'})
        }

        //cria uma variavel para enviar o comando sql
        const comando = `
        
                    SELECT
                        t.id_transacao,
                        t.valor,
                        t.descricao,
                        TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
                        t.tipo,
                        c.nome AS nome_categoria,
                        s.nome AS nome_subcategoria
                      FROM transacoes t 
                        LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                        LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
                        WHERE t.data_registro BETWEEN TO_DATE($1, 'DD/MM/YYYY') AND TO_DATE($2, 'DD/MM/YYYY')
        
        `

        //cria uma variavel para receber o retorno do sql
        const transacoes = await BD.query(comando);

        //retorno para a pagina, o json com os dados
        //buscados do sql
        return res.status(200).json(transacoes.rows);//200 ok
    } catch (error) {
        console.error('Erro ao listar transacoes', error.message);
        return res.status(500).json({ error: 'Erro ao listar transacoes' + error.message })
    }
})
router.get('/transacoes/tipo', async (req, res) => {
    const { tipo } = req.body

    try {

        if (!tipo) {
            return res.status(400).json('Informe o tipo')
        }
        //cria uma variavel para enviar o comando sql
        const query = `
        SELECT t.id_transacao, t.valor, t.descricao,
        TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS nome_categoria,
        s.nome AS nome_subcategoria
        FROM transacoes t
        LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
        LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
        WHERE t.tipo = $1
        ORDER BY t.data_registro DESC`

        //cria uma variavel para receber o retorno do sql
        const transacoes = await BD.query(query);

        //retorno para a pagina, o json com os dados
        //buscados do sql
        return res.status(200).json(transacoes.rows);//200 ok
    } catch (error) {
        console.error('Erro ao listar transacoes', error.message);
        return res.status(500).json({ error: 'Erro ao listar transacoes' + error.message })
    }
})
router.get('/transacoes/categoria', async (req, res) => {
    const { categoria } = req.body;   // ou req.query, dependendo do que você preferir

    try {
        if (!categoria) {
            return res.status(400).json({
                error: 'Informe o ID ou nome da categoria'
            });
        }

        const query = `
            SELECT
                t.id_transacao,
                t.valor,
                t.descricao,
                TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
                t.tipo,
                c.nome AS nome_categoria,
                s.nome AS nome_subcategoria
            FROM transacoes t
            LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
            LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
            WHERE t.id_categoria = $1
            ORDER BY t.data_registro DESC`;

        const transacoes = await BD.query(query, [categoria]);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transacoes por categoria:', error.message);
        return res.status(500).json({
            error: 'Erro ao listar transações por categoria',
            message: error.message
        });
    }
});
router.get('/transacoes/subcategoria', async (req, res) => {
    const { subcategoria } = req.body;

    try {
        if (!subcategoria) {
            return res.status(400).json({
                error: 'Informe o ID da subcategoria'
            });
        }

        const query = `
            SELECT
                t.id_transacao,
                t.valor,
                t.descricao,
                TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
                t.tipo,
                c.nome AS nome_categoria,
                s.nome AS nome_subcategoria
            FROM transacoes t
            LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
            LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
            WHERE t.id_subcategoria = $1
            ORDER BY t.data_registro DESC`;

        const transacoes = await BD.query(query, [subcategoria]);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transacoes por subcategoria:', error.message);
        return res.status(500).json({
            error: 'Erro ao listar transações por subcategoria',
            message: error.message
        });
    }
});



export default router