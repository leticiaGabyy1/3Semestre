import { useState } from "react";
import { estilos } from "../style/Estilos";


const Aula09_ListaNomes = () => {
    const [nome, setNome] = useState('')
    const [listaPresenca, setListaPresenca] = useState([

    ])

    function botaoNovo() {

        setListaPresenca([...listaPresenca, nome])
        setNome('')
    }

    function botaoExcluir(n) {
        const novosNomes = listaPresenca.filter((nome) => nome != n)
        setListaPresenca(novosNomes)
    }
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '35px',
            borderRadius: 8,
            width: '100%',
            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        }}>

            <h1>🥩Lista de Presença do Churrasco🥩</h1>
            <div style={{display:"flex"}}>
                <input type="text" onChange={(event) => setNome(event.target.value)} value={nome} />
                <button onClick={botaoNovo} style={{
                    backgroundColor: '#ff00bb75',
                    width: '100px',
                    height: '100',
                    padding: 1,
                    fontSize: '13px',
                    marginLeft: '5px'
                }} >Add novo convidado</button>
            </div>

            <div>
                {
                    listaPresenca.map((item, index) => (
                        <p key={index} style={{display: 'flex', marginTop: '4px',}}>

                            <p style={{width: "40%", backgroundColor:"#ef85ccba",padding: '4px'}}>{item}</p>
                            <button onClick={() => botaoExcluir(item)} style={{
                                backgroundColor: '#fc52bbb2',
                                width: '15%',
                                padding: '3px',
                                fontSize: '13px',
                                border: 'none',
                                color: '#ffffffa7'
                            }}>
                                Excluir
                            </button>
                        </p>
                    ))
                }
                </div>
                <div>
                    <button onClick={() => setListaPresenca([])} style={{
                    backgroundColor: '#f943a1c1',
                    width: '100px',
                    padding: 3,
                    fontSize: '13px',
                    marginTop: '10px',
                }}>
                    Limpar Lista
                </button>
                </div>
        </div>

    )
}

export default Aula09_ListaNomes;