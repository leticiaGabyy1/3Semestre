import { useEffect, useState } from "react"
import { estilos } from "../style/Estilos"


const Aula10 = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => { // função que tem a responsabilidade de observar algumas variaveis 
    //e sempre q ela sofrer alteração, esse efeito sera executado sempre q o contador mudar 
             console.log(contador);
             document.title = `Contagem: ${contador}`
        

    }, [contador])


    useEffect(( ) => {
        const contadorSalvo = localStorage.getItem('valorContador') || 0;
        setContador(JSON.parse(contadorSalvo))
    }, [])
    
    function botaoContador() {
        const novoContador = contador + 1
        setContador(novoContador)
           //Armazenando localmente nosso contador
             localStorage.setItem('valorContador', JSON.stringify(contador))
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />


            <p>Você clicou {contador} vezes</p>
            <button onClick={botaoContador} >Clique aqui</button>
        </div>
    )
}


export default Aula10