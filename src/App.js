
import './App.css';
import Pokebox from './containers/Pokebox';

function App() {

  const generations = [
    {name: "Generation 1", url: 'https://pokeapi.co/api/v2/pokemon?limit=151=0'},
    {name: "Generation 2", url: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100  =0'},
    {name: "Generation 3", url: 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135=0'},
    {name: "Generation 4", url: 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=110=0'},
    {name: "Generation 5", url: 'https://pokeapi.co/api/v2/pokemon?offset=494&limit=155=0'},
    {name: "Generation 6", url: 'https://pokeapi.co/api/v2/pokemon?offset=649&limit=121=0'},
    {name: "Generation 7", url: 'https://pokeapi.co/api/v2/pokemon?offset=721&limit=88=0'},
    {name: "Generation 8", url: 'https://pokeapi.co/api/v2/pokemon?offset=809&limit=96=0'}
    ]



  return (

    
    <Pokebox generations = {generations}></Pokebox>
  );
}

export default App;
