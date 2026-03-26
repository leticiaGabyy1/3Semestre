import {Link} from 'react-router-dom'

function Inicio (){
    return(
      <div>
        <h1>Bem-Vindo😵‍💫</h1>
        <Link to='/Detalhes'>Voltar para Principal</Link>
        <br />
        <button onClick={()=> navigate('/Detalhe')}>Detalhe</button>
      </div>
    )
}

export default Inicio