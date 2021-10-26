import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import api from './services/api';

export default function App() {
  // Variaveis para API
  const [Poke, setPoke] = useState({});
  // Variaveis para buscar por nome
  const [searcpoke, setSearcPoke] = useState('');

  //Função onde vai ser feito o get da api de todos os nomes
  const consulta = async () => {  
      const response = await api.get(`pokemon`);
      setPoke(response.data.results);   
    }

  //Teste
  //const consulta = async () => {
  //  const response = await api.get(`pokemon`);
  //  setPoke(response.data.results);
  //}

  // Função para exibir a lista
  function PokemonShow(item){
    const {name} = item.item
    return(
      <View style={styles.listaPoker} >
        <Text style={styles.poke}>{name}</Text>
      </View>
    )
  } 



  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >PokeAPI</Text>

      <TextInput
      style={styles.input} 
      placeholder="Digite aqui" 
      value={searcpoke}
      onChangeText={(text) => setSearcPoke(text)}
     />

      <TouchableOpacity 
      onPress={consulta}
      >
        <Text  style={styles.TextBTN} >Buscar</Text>
      </TouchableOpacity>

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 40
  },
  input:{
    borderColor: "red",
    borderWidth: 1,
    width: 200,
    height: 40
  },
  TextBTN:{
    fontSize: 18,
    margin: 10,

  },
  Resultado:{
    fontSize: 30,
    marginTop: 100

  },
  poke:{
    fontSize:20,
    backgroundColor: "#ffdd",
    margin: 10,  
  },
  listaPoker:{
    backgroundColor:'#ffdddd',
    width: 300
  }
});
