import {estilos} from "../style/Estilos";
import Aula04_IMC from "./Aula04_IMC";
import Aula04_Filmes from "./Aula04_Filmes";


const Aula04 = () => {
    return (
          <div style={estilos.cardAula}>
            <h2>Aula 04 - Props</h2>
            <h3>criação de componentes reutilizáveis e suas estilizações</h3>
            <hr />
            <Aula04_IMC nome='Leticia' peso={63} altura={1.67} cor="#f60887"/>
            <Aula04_IMC nome='Marcos' peso={70} altura={1.75} cor="#c009b6"/>
            <Aula04_IMC nome='Gislaine' peso={67} altura={1.70} cor="#0e44f7"/>
            <hr />
            <div style={{display:'flex', flexWrap:'wrap'}}>
            <Aula04_Filmes foto="https://i.pinimg.com/736x/88/a3/f0/88a3f0075dd34741ff04252bb0ee55ee.jpg" genero={"Mistério/Drama"} titulo={"cruella"}/>
            <Aula04_Filmes foto="https://i.pinimg.com/736x/3f/77/ed/3f77ed296feaf9ccad45994e479d7916.jpg" genero={"Suspense/Aventura"} titulo={"Alice no país das maravilhas"}/>
          
            <Aula04_Filmes foto="https://i.pinimg.com/736x/9a/ab/a6/9aaba672050450f880f7957340498125.jpg" genero={"Infantil/Aventura"} titulo={"Enrolados"}/>
            <Aula04_Filmes foto="https://i.pinimg.com/736x/81/3f/47/813f479c3059340120d52b97ac0113b8.jpg" genero={"Romance/Aventura"} titulo={"A 5 passos de você"}/>
        </div></div>

    )
}

export default Aula04