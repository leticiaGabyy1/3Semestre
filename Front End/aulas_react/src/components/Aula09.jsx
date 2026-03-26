import { useState } from "react";
import { estilos } from "../style/Estilos";
import Aula07_Perfil from "./Aula07_Perfil";
import Aula09_Numero from "./Aula09_Numero";

const Aula09 = () =>{
    const [numerosSorteados, setNumeroSorteados] = useState([1,2,3]);
    const [listaPerfis, setListaPerfis] = useState([
        {"nome": "Leticia❤️","foto": "https://i.pinimg.com/736x/06/71/94/067194469c0bc0951637fbf9f1f0d370.jpg"},
        {"nome": "Marcos ❤️","foto": "https://i.pinimg.com/1200x/ed/f8/79/edf879a7846519fa4da6eed8cbdd78e4.jpg"},
        {"nome": "Bella ❤️","foto": "https://i.pinimg.com/736x/5f/f1/e4/5ff1e437091b3af09e6966ffa270e008.jpg"},
    ])

    function botaoSortear(){
        const novoNumero = Math.floor(Math.random() * 60 + 1);
        setNumeroSorteados([...numerosSorteados, novoNumero]);
    }

    function botaoExcluir(nr){
        const novosNumeros = numerosSorteados.filter((numero) => numero != nr)
        setNumeroSorteados(novosNumeros)
    }
    return(
        <div style={estilos.cardAula}>
            <h2>Aula 09 - Listas ao react</h2>
            <h3>Exibindo conteudos dinamicamente</h3>


            <button onClick={botaoSortear}>Novo Número</button>

            <h4>Lista de numeros sorteados</h4>
            {/* Utilizando função map para percorrer a lista */}
            <div style={{display: "flex"}}>
            {
                numerosSorteados.map((numero, index) =>(
                    // <p key={index}>-{numero}</p>
                    <Aula09_Numero key={index} numero={numero} excluir={()=> botaoExcluir(numero)}/>
                ))
            }
            </div>
            <div style={{display:"flex", gap:"4"}}>
            {
                listaPerfis.map((perfil, index) =>(
                    <Aula07_Perfil key={index} nome={perfil.nome} foto={perfil.foto} />
                ))
            }
        </div> </div>
    )
}

export default Aula09;