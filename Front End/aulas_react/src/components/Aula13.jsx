import { estilos } from "../style/Estilos"
import Aula13_CRUD_Produtos from "./Aula13_CRUD_Produtos";
import Aula13_Crud_Usuarios from "./Aula13_CRUD_Usuario";
import Aula13_Usuario from "./Aula13_Usuario";

const Aula13 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 13 CRUD com API  </h2>
            <h3>Criando um CRUD utilizando API desenvolvida em Backend </h3>
            <hr />
            <Aula13_Crud_Usuarios />
            <Aula13_CRUD_Produtos />
        </div>
    );

};

export default Aula13