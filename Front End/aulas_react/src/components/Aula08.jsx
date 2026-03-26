import {estilos} from "../style/Estilos"
import jogo from '../assets/ia.png'

const Aula08 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2> Aula 08 - Revisão</h2>
            <h3> Revisão de conteúdo com o Jogo Número Secreto</h3>
            <a href="https://jogo-numero-secreto-5o6z2hoam-leticia-s-projects-c0d43880.vercel.app/">
            <img src={jogo} alt="" style={{width:'100%'}} />
            Link do jogo
            </a>
        </div>
    )
}

export default Aula08