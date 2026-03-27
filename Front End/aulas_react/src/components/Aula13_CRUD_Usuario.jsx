import { estilos } from '../style/Estilos'
import { useState, useEffect } from 'react'
import {enderecoServidor} from './Aula07_Multicomponentes'
import Aula13_Usuario from './Aula13_Usuario'

const Aula13_Crud_Usuarios = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [listaUsuarios, setListaUsuarios] = useState([])

    async function botaoExcluir(id_usuario) {
        try {
            const resposta = await fetch(`${enderecoServidor}/usuarios/${id_usuario}`, {
                method: 'DELETE'
            })
            if (!resposta.ok) {
                throw new Error('Erro ao excluir: ' + resposta)
            }
            buscarDados()
        } catch (error) {
            console.error("Erro ao adicionar usuarios", error.message)
        }

    }


    async function botaoAdicionar() {
        const novoUsuario = {
            nome,
            email,
            senha
        }

        try {
            const resposta = await fetch(`${enderecoServidor}/usuarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoUsuario)
            })

            if (!resposta.ok) {
                throw new Error('Erro ao adicionar usuario')
            }

            buscarDados() // atualiza lista
            LimparCamposFormularios()

        } catch (error) {
            console.error("Erro ao adicionar usuario", error.message)
        }
    }

    function LimparCamposFormularios() {
        setNome('')
        setEmail('')
        setSenha('')
    }

    async function buscarDados() {
        try {
            const resposta = await fetch(`${enderecoServidor}/usuarios`)

            if (!resposta.ok) {
                throw new Error('Erro ao buscar usuarios')
            }

            const dados = await resposta.json()
            setListaUsuarios(dados)

        } catch (error) {
            console.error("Erro ao buscar usuarios", error.message)
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div style={estilos.cardAula}>
            <h1>Cadastro de Usuarios</h1>

            <div className="container">
                <input type="text" placeholder='Nome' className='input' value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder='Email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Senha' className='input' value={senha} onChange={(e) => setSenha(e.target.value)} />

                <button className='btn' onClick={botaoAdicionar}>
                    Adicionar Usuario
                </button>
            </div>

            <hr />

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {
                    listaUsuarios.map((usuario, pos) => (
                        <Aula13_Usuario key={pos} usuario={usuario} botaoExcluir={botaoExcluir} />
                    ))
                }
            </div>
        </div>
    )
}


export default Aula13_Crud_Usuarios