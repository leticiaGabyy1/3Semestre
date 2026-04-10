import { useState } from 'react'
import {View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native'
import Logo from '../assets/logo.png'
import {LinearGradient} from 'expo-linear-gradient'
const Aula02 = () =>{
    const [nome, setNome] = useState('')
  return(
    
        
    <View>
       <Text>---------------------------------------------------</Text>
       <Text>Aula 02 - Componentes Básicos</Text>
       <Text>Conhecendo os principais componentes do React Native </Text>
       <Image source={{uri:'https://picsum.photos/300/200'}}
         style={{width:300, height:200}}
       />
       <Image
         source={require ('../assets/logo.png')}
         style={{width:50, height:50}}
       />
       <Image
         source={Logo}
         style={{width:50, height:50}}
       />
    < TextInput 
      placeholder='Digite seu nome: '
      onChangeText={setNome}
      style={{borderWidth:1, padding:10, marginBottom:10}}
    />
    <Text>Seu nome é: {nome}</Text>

    <Button title='Clique aqui' color={'#f5077e'} 
    onPress={() => console.log(`Bem-Vindo ${nome}`)
    } 
    />
    <TouchableOpacity
      style={estilos.botao}
      onPress={() => console.log(`Bem-Vindo ${nome}`)} 
    >
        <Image
         source={Logo}
         style={{width:25, height:25}}
        />
       
        <Text style={estilos.botaoTexto}>Botão TouchableOpacity</Text>
    </TouchableOpacity>
    <LinearGradient style={{height:50}}
         colors={['transparent', 'red', 'transparent']}>

    </LinearGradient>
    
    </View>
    
  )
}

const estilos = StyleSheet.create({
    botao:{backgroundColor:'#fb00d1', padding:12, borderRadius:8, alignItems:'center'},
    botaoTexto:{color:'#fff', fontSize:16, fontWeight:'bold'}
})
 

export default  Aula02 

