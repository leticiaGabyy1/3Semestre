import { estilos } from "../style/Estilos"
import { useState } from "react"

const Aula07_Perfil = ({foto, nome}) => {
    return(
        <div>
            <Avatar foto={foto}/>
            <InfoUsuario nome={nome} />
            <BotaoSeguir />
        </div>
    )
}

export const Avatar = ({foto}) =>{
    return <img style={estilos.Avatar} src={foto} alt="" />
}


export const InfoUsuario = ({ nome }) =>{
    return(
       <h3>{nome}</h3>
    )
}

export const BotaoSeguir = () => {
    const [seguindo, setSeguindo] = useState(false)
    return (
        <button onClick={() => setSeguindo(!seguindo)} style={{
             backgroundColor: '#f660d891' ,
               width:'100px',
               padding:3,
               fontSize:'13px'
        }}>     
        {seguindo == false ? "Seguir" : "Deixar de seguir"}
        </button>  
    ) 
}


export default  Aula07_Perfil