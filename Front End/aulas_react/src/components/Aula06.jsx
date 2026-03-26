import {estilos} from "../style/Estilos"
import{useState} from "react"


const Aula06 = () =>{

    const [nome,setNome,] = useState('')
    const [cidade,setCidade] = useState('')
    const [telefone,setTelefone] = useState('')
    const [visivel, setVisivel] = useState(false)

    function botaoLimpar (){
        setNome('')
        setCidade('')
        setTelefone('')
    }

    return (
        <div style={estilos.cardAula}>
        <h2> Aula 06 - Estado de um componente </h2>
        <h3> o hook useState adiciona estado a componentes funcionais</h3>
        <hr />

        <input type="text" onChange= {(event) => setNome(event.target.value)} value={nome} />
        <input type="text" onChange= {(event) => setCidade(event.target.value)} value={cidade} />
        <input type="text" onChange= {(event) => setTelefone(event.target.value)} value={telefone} />
        <p>Olá {nome}, você mora em {cidade}  e seu telefone é {telefone}</p>
        <button onClick={botaoLimpar}>Limpar</button>
        <hr />
        <button onClick={() => setVisivel(!visivel)}>
            {visivel == false ? <p>mostrar saldo</p> : <p>ocultar saldo🔒</p>}  
        </button>

         {visivel == false ? <p>R$***,**</p> : <p>R$ 530,50 🔓</p>}
        
         
        
        </div>
    )
}


export default Aula06