import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/produtos', async (req, res) => {
    try {
        
        const query = `SELECT * FROM produtos ORDER BY id_produto`
l
        const produtos = await BD.query(query);

        res.status(200).json(produtos.rows);
    } catch (error) {
        console.error('Erro ao listar Produtos', error.message);
        res.status(500).json({ error: 'Erro ao listar Produtos' })

    }
})



router.post('/produtos', async (req, res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;
    const linkProduto = req.body.linkProduto;
    const linkImagem = req.body.linkImagem;

    try {
        const comando = `INSERT INTO teste(nome, preco, categoria, linkProduto, linkImagem)
    VALUES($1, $2, $3, $4, $5)`
        const valores = [nome, preco,categoria,linkProduto,linkImagem];


        await BD.query(comando, valores)
        console.log(comando, valores);

        res.status(201).json("produtos cadastrado");
    } catch (error) {
        console.error('Erro ao Cadastrar usuários', error.message);
        res.status(500).json({ error: 'Erro ao cadastrar produtoss' })

    }
})

//Rota Patch atualizando parcialmente as informações
router.patch('/produtos/id_produtos', async (req, res) => {
    const { id_produtos } = req.params;
    const { nome, preco, categoria, linkImagem,linkProduto } = req.body;

    try {
        const verificarprodutos = await BD.query(`SELECT * FROM produtos WHERE id_produtos = $1`, [id_produtos])
        if (verificarprodutos.rows.length === 0) {
            return res.status(404).json({ message: 'produtos não encontrado' })
        }

        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }
        if (preco !== undefined) {
            campos.push(`preco = $${contador}`);
            valores.push(preco);
            contador++;
        }
        if (categoria !== undefined) {
            campos.push(`categoria = $${contador}`);
            valores.push(categoria);
            contador++;
        }
        if (linkImagem !== undefined) {
            campos.push(`linkImagem = $${contador}`);
            valores.push(linkImagem);
            contador++;
        }
        if (linkProduto !== undefined) {
            campos.push(`linkProduto = $${contador}`);
            valores.push(linkProduto);
            contador++;
        }



        if (campos.length === 0) {
            return res.status(400).json({ message: "Nenhum campo a atualizar" })
        }
        valores.push(id_produtos)

        const comando = `UPDATE produtos SET ${campos.join(', ')} WHERE id_produtos = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('produto atualizado com sucesso');

    } catch (error) {
        console.log('Erro ao atualizar o produto', error.message);
        return res.status(500).json({ message: "Erro interno ao servidor" + error.message })

    }
})

router.delete('/produtos/:id_produtos', async (req, res) => {
    const { id_produtos } = req.params;
    try {
        const comando = `DELETE FROM produtos WHERE id_produtos = $1`
        await BD.query(comando, [id_produtos])
        return res.status(200).json({message: "produtos removido com sucesso"})
    } catch (error) {
        console.log('Erro ao atualizar o produto', error.message);
        return res.status(500).json({ message: "Erro interno ao servidor" + error.message })
    }
})


export default router