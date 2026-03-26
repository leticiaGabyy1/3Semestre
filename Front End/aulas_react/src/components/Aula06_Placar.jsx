import { useState } from "react"
import {estilos} from "../style/Estilos"
const Aula06_Placar = () =>{
    const [contador, setContador] = useState(0)
    const [contador1, setContador1] = useState(0)
    const [contador3, setContador3] = useState(0)
    const [contador4, setContador4] = useState(0)

  function botaoZerar() {
    setContador(0)
    setContador1(0)
    setContador3(0)
    setContador4(0)
    
  }
   
   
    return(
        <div style={estilos.cardAula}>
            <p>Time 1-Futebol</p>
            <h2>Nº: {contador}</h2>
            <button onClick={() => setContador(contador +1)}>+1 Ponto⚽</button>
            <p>Time 2-Futebol</p>
            <h2>Nº: {contador1}</h2>
            <button onClick={() => setContador1(contador1 +1)}>+1 Ponto⚽</button>
            <hr />
           <p>Time 1-Basqete</p>
            <h2>Nº: {contador3}</h2>
            <button onClick={() => setContador3(contador3 +1)}>+1 Ponto🏀</button>
            <button onClick={() => setContador3(contador3 +2)}>+2 Ponto🏀</button>
            <button onClick={() => setContador3(contador3 +3)}>+3 Ponto🏀</button>
            <p>Time 2-Basquete</p>
            <h2>Nº: {contador4}</h2>
            <button onClick={() => setContador4(contador4 +1)}>+1 Ponto🏀</button>
            <button onClick={() => setContador4(contador4 +2)}>+2 Ponto🏀</button>
            <button onClick={() => setContador4(contador4 +3)}>+3 Ponto🏀</button>
            <hr />
           <button onClick={botaoZerar}>Zerar🤯</button>




        </div>
    )
}


export default Aula06_Placar;