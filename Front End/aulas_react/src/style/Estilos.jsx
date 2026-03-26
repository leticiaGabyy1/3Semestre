/** @type {{ [key: string]: import('react').CSSProperties }} */

import { Avatar, InfoUsuario } from '../components/Aula07_Perfil';

export const estilos = {
   tituloModulo: {
    color:'blue',
    fontWeight:'bold'
},
descricaoModulo: {
    fontStyle:'italic'
},
fundo : {
    backgroundColor:'#f3f4f6',
    minHeight: '100vh'
},
conteudo: {
    maxWidth: 1200,
    margin: '0 auto',
    padding:  24
},
lista_aulas: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16
},

cardAula: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)'
},

card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        margin: '10px auto',
        backgroundColor: '#fe84d33e',
        padding: '20px',
        boxShadow: '0px 4px 6px rgba(238, 10, 128, 0.71)',
        borderRadius: '8px',
        gap: '5px'

},

botao:{
  backgroundColor: '#f660d891' ,
  width:'100px',
  padding:3,
 

},

Avatar:{
     border: '7px solid pink',
     borderRadius:'50%',  
     width:'250px', 
     height:'250px'
},


   

}