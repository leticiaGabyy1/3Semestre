import {estilos} from "../style/Estilos";
import Aula07_Multicomponentes, { MeuComponenteNomeado, MeuComponenteNomeado2, enderecoServidor } from "./Aula07_Multicomponentes";
import Aula07_Perfil from "./Aula07_Perfil";
import Aula08 from "./Aula08";

const Aula07 = () => {
    return (
          <div style={estilos.cardAula}>
            <h2>Aula 07 - Importação e exportação de Módulos</h2>
            <h3>Compreendendo importação e exportação padrão ou nomeada</h3>
            <hr />

            <Aula07_Multicomponentes/>
            <MeuComponenteNomeado/>
            <MeuComponenteNomeado2/>
            <p>{enderecoServidor}</p>
            <Aula07_Perfil nome="Leticia" foto="https://i.pinimg.com/736x/0e/47/de/0e47ded2f47dd53492a0c9ccb1fe2240.jpg"/>
            


           
        
        </div>

    )
}


export default Aula07