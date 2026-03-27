import {Link, useParams} from 'react-router-dom'

function Filmes (){
  const {nome} = useParams();
    return(
      <div>
        <h1>Este é o Filme: {nome}</h1>
        <Link to='/'>Voltar para Principal</Link>
      </div>
    )
}

export default Filmes
