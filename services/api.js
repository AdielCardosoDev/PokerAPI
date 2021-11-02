//URL da API
import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export default api;


  //Teste
  //const consulta = async () => {
  //  const response = await api.get(`pokemon`);
  //  setPoke(response.data.results);
  //}


