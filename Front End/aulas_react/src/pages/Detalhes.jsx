import {estilos} from "../style/Estilos";
import {Link, useNavigate} from 'react-router-dom'

const Detalhes = () => {
    const navigate = useNavigate();
    return (
          <div style={estilos.cardAula}>
            <h2>Mais informações</h2>
           <hr /> 
           <br />
           <button onClick={() => navigate('/Contato')}>Contato</button>
          
        </div>

    )
}

export default Detalhes