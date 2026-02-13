const Aula04_Filmes = ({ foto, genero, titulo }) => {
    return (
        <div style={estilos.cardFilmes}>
            <img src={foto} alt="" height={400} />
            <h3>{titulo}</h3>
            <p>{genero}</p>
            <button style={estilos.button}>Assistir</button>
        </div>
    )

}
/** @type {{ [key: string]: import('react').CSSProperties }} */
    const estilos = {
    
    
     cardFilmes: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       
        marginBottom: -9,
        
        margin: '0 auto',
        width:'400px',
        boxShadow: '0 8px 8px rgba(0,0,0,0.1)',
        padding: '40px',
        gap:10,
       
        justifyContent: 'space-between',
       
       
    },
    button: {
        backgroundColor: '#893df4',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    
}
export default Aula04_Filmes