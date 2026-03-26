import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/usuarios', async (req, res) => {
    try {
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`

        //cria uma variavel para receber o retorno do sql
        const usuarios = await BD.query(query);

        //retorno para a pagina, o json com os dados 
        //buscando o sql
        res.status(200).json(usuarios.rows);//200 ok
    } catch (error) {
        console.error('Erro ao listar usuários', error.message);
        res.status(500).json({ error: 'Erro ao listar usuarios' })

    }
})


//Endpoint para adicionar um novo usuario
//O endpoint com parametros diretos no comando sql, permite o sql injection
// router.post('/usuarios', async(req,res) =>{
//     const nome = req.body.nome;
//     const email = req.body.email;
//     const senha = req.body.senha;

//     try{
//     const comando = `INSERT INTO teste(nome, email, senha)
//     VALUES('${nome}', '${email}', '${senha}')`

//     console.log(comando);
//     await BD.query(comando)
//     res.status(201).json("Usuario cadastrado")
//     } catch (error){
//         console.error('Erro ao Cadastrar usuários', error.message);
//         res.status(500).json({error: 'Erro ao cadastrar usuarios'})

//     }
// })
router.post('/usuarios', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    try {
        const comando = `INSERT INTO usuarios(nome, email, senha)
    VALUES($1, $2, $3)`
        const valores = [nome, email, senha];


        await BD.query(comando, valores)
        console.log(comando, valores);

        res.status(201).json("Usuario cadastrado");
    } catch (error) {
        console.error('Erro ao Cadastrar usuários', error.message);
        res.status(500).json({ error: 'Erro ao cadastrar usuarios' })

    }
})

//Rota Patch atualizando parcialmente as informações
router.patch('/usuarios/id_usuarios', async (req, res) => {
    const { id_usuarios } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS WHERE id_usuarios = $1`, [id_usuarios])
        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuario não encontrado' })
        }

        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }
        if (email !== undefined) {
            campos.push(`email = $${contador}`);
            valores.push(email);
            contador++;
        }
        if (senha !== undefined) {
            campos.push(`senha = $${contador}`);
            valores.push(senha);
            contador++;
        }



        if (campos.length === 0) {
            return res.status(400).json({ message: "Nenhum campo a atualizar" })
        }
        valores.push(id_usuario)

        const comando = `UPDATE USUARIOS SET ${campos.join(', ')} WHERE id_usuario = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('Usuário atualizado com sucesso');

    } catch (error) {
        console.log('Erro ao atualizar o usuário', error.message);
        return res.status(500).json({ message: "Erro interno ao servidor" + error.message })

    }
})

router.delete('/usuarios/:id_usuarios', async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const comando = `DELETE FROM USUARIOS WHERE id_usuario = $1`
        await BD.query(comando, [id_usuario])
        return res.status(200).json({message: "Usuario removido com sucesso"})
    } catch (error) {
        console.log('Erro ao atualizar o usuário', error.message);
        return res.status(500).json({ message: "Erro interno ao servidor" + error.message })
    }
})

router.post('/login', async(req,res) =>{
    if(!email || !senha){
        return res.status(400).json({message: 'Email e a senha são obrigatórios'})
    }
    try{
      const comando = 'SELECT id_usuario, nome,email,senha FROM USUARIOS WHERE email = $1'
      const resultado = await BD.query(comando,[email])
      if(resultado.rows.length === 0){
         return res.status(401).json({message:"Erro interno do servidor" + error.message})
      }
      const usuario = resultado.rows[0]
      if(usuario.senha !== senha){
        return res.status(401).json({message:'Senha invalida.'})

      }
      return res.status(200).json({
        message:'Login realizado com sucesso',
        usuario: {
            id: usuario.id_usuario,
            nome: usuario.nome,
            email: usuario.email
        }
      })
    }catch(error){
        console.error('Erro ao atualizar usuario', error.message)
        return res.status(500).json({message:'Erro interno ao servidor' + error.message})
        
    }
})

export default router