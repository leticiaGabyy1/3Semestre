//Aqui é onde importaremos todas as bibliotecas e componentes que utilizaremos

import { StatusBar } from 'expo-status-bar';
//todo o componente visual utilizdo em react native precisa ser importado
import { StyleSheet, Text, View } from 'react-native';

//componente tradicional
export default function Aula01() {
  return (
    //o componente view, corresponde ao div, main, section, header do html
    <View style={estilos.container} >
     {/*O componente text corresponde ao p, h1, h2, h3, span do html*/ }
      <Text style={estilos.titulo}>Hello word</Text>
      <Text style={{fontWeight:'bold'}}>Olá, esse é minha primeira Aula01!!</Text>
       {/* Defino e estilizo a barra de status do dispositivo*/}
      <StatusBar style="auto" />

      {/*Aqui vou colocar o exercicio*/}
      <View style={{width: '100%'}}>
        <Text style={{textAlign:'left', color:'#320cee'}}>Texto1</Text>
        <Text style={{textAlign:'right', fontWeight:'bold'}}>Texto2</Text>
        <Text style={{textAlign:'center' ,color:'#f30808', }}>Texto3 </Text>

      </View>
      
    </View>
  );
}

//Para estilizarmos em react native, importamos o StyleSheet
// e fazemos um objeto estilização igual ao react
const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize:30,
  },
});

