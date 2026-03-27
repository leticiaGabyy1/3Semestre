import {estilos} from "../style/Estilos";
import {Link, useNavigate} from 'react-router-dom'

const Contato = () => {
    const navigate = useNavigate();
    return (
          <div style={estilos.cardAula}>
            <h2>Entre em contato</h2>
           <hr /> 
           <br />
           <Link to='/Inicio'> Página Inicial</Link><br />
           <Link to='/'> Página Principal</Link>
           <br />
           
          
        </div>

    )
}

export default Contato