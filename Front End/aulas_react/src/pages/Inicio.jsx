import {Link,  useNavigate} from 'react-router-dom'

function Inicio (){
  const navigate = useNavigate();
    return(
      <div>
        <h1>Bem-Vindo</h1>

        <Link to='/Detalhes'>Detalhes</Link>
        <br />
        
      </div>
    )
}

export default Inicio