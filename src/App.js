
import './App.css';
import Pokebox from './containers/Pokebox';

function App() {

  const generations = [
    {name: "Generation 1", url: 'https://pokeapi.co/api/v2/pokemon?limit=151=0'},
    {name: "Generation 2", url: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100  =0'},
    {name: "Generation 3", url: 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135=0'}
    ]



  return (

    
    <Pokebox generations = {generations}></Pokebox>
  );
}

export default App;
