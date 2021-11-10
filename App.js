import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import api from './services/api';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  // Variaveis para API
  const [Poke, setPoke] = useState({});

  // Variaveis para buscar por nome
  const [searcpoke, setSearcPoke] = useState('');

  //Função onde vai ser feito o get da api de todos os nomes
  const consulta = async () => {  
      const response = await api.get(`${searcpoke}`);
      setPoke(response.data.results);
          
    }  

  // Função para exibir a lista na tela
  function PokemonShow(item){
    const {name, url} = item.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png'
    return(
      <View style={styles.listaPoker} >
        <Text style={styles.poke}>{name}</Text>
        <Image style={{width: 50, height: 50, }} source={{uri: imageURL}} />
      </View>
    )
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >PokeAPI</Text>

      <View style={styles.pesquisa} >
        <TextInput
      style={styles.input} 
      placeholder="Digite aqui"
      value={searcpoke}
      onChangeText={(text) => setSearcPoke(text)}
     />

      <TouchableOpacity 
      onPress={consulta}      
      >
        <AntDesign name="search1" size={24} color="black" style={styles.TextBTN} />
      </TouchableOpacity>
      </View>
      
      <FlatList 
      data={Poke}
      keyExtractor={(pokemon) => pokemon.name}
      renderItem={PokemonShow}      
      />
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pesquisa:{
    flexDirection:'row',
    alignItems: 'center'
  },

  titulo:{
    marginTop:30,
    fontSize: 40,
    color: '#D90429',
    fontWeight: 'bold'
  },
  input:{
    borderColor: "#2B2D42",
    backgroundColor:'#fff',
    borderWidth: 1,
    width: 250,
    height: 40,
    padding:5,
    borderRadius:5
    
  },
  TextBTN:{
    fontSize: 18,
    padding:10,    
    margin: 5,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 5,
    backgroundColor: '#2B2D42'

  },
  Resultado:{
    fontSize: 30,
    marginTop: 100

  },
  poke:{
    fontSize:20,
    fontWeight: 'bold',    
    margin: 10, 
    color: '#EF233C' 
  },
  listaPoker:{
    backgroundColor:'#EDF2F4',
    width: 400
  }
});
