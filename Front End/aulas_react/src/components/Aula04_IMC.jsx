const Aula04_IMC = ({nome, peso, altura, cor}) => {

   // let nome = 'Leticia';
   // let peso = 63;
   // let altura = 1.67;
    let imc = peso / (altura * altura);

    return (
        <div>
            <h3>Calculadora de IMC</h3>
            <p style={{color: cor}}>Olá  {nome}💕</p>
            <p>Altura: {altura}cm</p>
            <p>peso: {peso}kg</p>
            <p>IMC:{imc.toFixed(1)}kg/m²</p>
            <hr />

        </div>
    )
}

export default Aula04_IMC