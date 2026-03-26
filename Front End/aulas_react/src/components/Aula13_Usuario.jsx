import {estilos} from "../style/Estilos";

const Aula13_Usuario = ({ usuario, botaoExcluir }) => {
    return (
        <div style={estilos.cardUsuario}>
            <h2 style={estilos.nomeUsuarios}>{usuario.nome}</h2>
            <h2 style={estilos.email}>{usuario.email}</h2>
            <button onClick={() => botaoExcluir(usuario.id_usuario)}>Excluir</button>
        </div>
    )
}


export default Aula13_Usuario