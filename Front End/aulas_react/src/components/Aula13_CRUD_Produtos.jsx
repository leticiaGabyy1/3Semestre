import { useEffect, useState } from "react"
import Aula13_Produto from "./Aula13_Produto"

const Aula13_CRUD_Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [link_produto, setLinkProduto] = useState('')
    const [link_imagem, setLinkImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [frete, setFreteGratis] = useState(false)

    const [editando, setEditando] = useState(false)
    const [id, setId] = useState('')

    function botaoAlterar(produto){
       setNome(produto.nome)
       setPreco(produto.preco)
       setLinkProduto(produto.link_produto)
       setLinkImagem(produto.link_imagem)
       setCategoria(produto.categoria)
       setFreteGratis(produto.frete)
       setEditando(true)
       setId(produto.id_produto)
    }

async function botaoAdicionar() {
        const novoProduto = {
            nome: nome,
            preco: preco,
            link_produto: link_produto,
            link_imagem: link_imagem,
            categoria: categoria,
            frete: frete
        }

        try {
        let endpoint = 'http://10.130.42.68:3001/produtos'
        let metodo = 'POST'
        if(editando == true){
            endpoint = `http://10.130.42.68:3001/produtos/${id}`

        }

            const resposta = await fetch( endpoint, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoProduto)
            })
            if (!resposta.ok) {
                throw new Error('Erro ao excluir produto:' + resposta.statusText)
            }
            buscarDados()
          
        } catch (erro) {
            console.error('Erro ao adicionar produto', erro.message);
        }
          LimparCamposFormularios()
          

    }
    
   async function botaoExcluir(id_produto){
    
        const novoProduto = {
            nome: nome,
            preco: preco,
            link_produto: link_produto,
            link_imagem: link_imagem,
            categoria: categoria,
            frete: frete
        }
     }

    useEffect(() => {
        buscarDados()
    }, [])

    async function buscarDados() {
        try{
            const resposta = await fetch('http://10.130.42.68:3001/produtos')
            const dados = await resposta.json()
            setListaProdutos(dados)
        }catch(error){
             console.error('Erro ao adicionar produto', error.message);
        }
    }
    function LimparCamposFormularios() {
        setNome('')
        setPreco('')
        setLinkProduto('')
        setLinkImagem('')
        setCategoria('')
        setFreteGratis(false)
        setEditando(false)
        setId('')

    }
    return (
        <div>
            <h1>Cadastro de Produtos</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" style={estilos.inputs} value={nome}
                    onChange={(event) => setNome(event.target.value)} />
                <input type="number" placeholder="Preço" style={estilos.inputs} value={preco}
                    onChange={(event) => setPreco(event.target.value)} />
                <input type="text" placeholder="Link do Produto" style={estilos.inputs} value={link_produto}
                    onChange={(event) => setLinkProduto(event.target.value)} />
                <input type="text" placeholder="Link da foto" style={estilos.inputs} value={link_imagem}
                    onChange={(event) => setLinkImagem(event.target.value)} />
                <select style={estilos.inputs} value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Eletrônicos'>Eletrônicos</option>
                    <option value='Brinquedos'>Brinquedos</option>
                    <option value='Livros'>Livros</option>
                </select>
                <span> <input type="checkbox" checked={frete}
                    onChange={(event) => setFreteGratis(event.target.value)} />  Frete Grátis </span>
                <button style={estilos.botao} onClick={botaoAdicionar}>
                    {editando == false ? "Adicionar Produto" : "Editar Produto"}
                    </button>
                    {
                        editando == true && 
                        <button style={estilos.botao} onClick={LimparCamposFormularios

                            
                        }>Cancelar</button>
                    }


                <hr />
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} >
                    {
                        listaProdutos.map((produto, pos) => (
                            <Aula13_Produto key={pos} produto={produto} botaoExcluir={botaoExcluir} botaoAlterar={botaoAlterar} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const estilos = {
    cadastro: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    inputs: {
        padding: "10px",
        fontSize: "16px",
    },
    botao: {
        backgroundColor: "#e30613",
        color: "#fff",
        borderRadius: "5px",
        fontWeight: "bold",
        border: "none",
        padding: "10px",
        fontSize: "16px",
    }
}

export default Aula13_CRUD_Produtos