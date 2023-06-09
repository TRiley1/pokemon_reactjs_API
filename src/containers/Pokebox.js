import Pokelist from "../components/Pokelist";
import SelectPoke from "../components/SelectPoke";
import React, { useState, useEffect } from 'react';
import Logo from "../components/logo/Logo";
import '../components/SelectPoke.css'




const Pokebox = ({generations}) => {

    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredSearch, setFilterSearch] = useState('');


    useEffect(() => {
        fetchGen1Pokemon(generations[0].url);
      }, []);

    useEffect(() => {
        const searchTerm = search.toLowerCase()

        const searchFilter = pokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(searchTerm)
        })


        setFilterSearch(searchFilter)
    }, [search])

      if (pokemons == null || pokemons.length === 0) {
        return <p>Loading...</p>;
      }

        
    
        async function fetchGen1Pokemon(url) {
        const response = await fetch(url);
        const data = await response.json();
        const speciesArray = data['results'];

        const promises = speciesArray.map(pokemon => {
            return fetch(pokemon.url)
            .then(res => res.json());
        });

        const pokemonData = await Promise.all(promises);

        setPokemons(pokemonData);
        setFilterSearch(pokemonData);
        setSearch('')
        
        }

   

    const handleInput = (value) => {
        return setSearch(value)
    }

    async function fetchFirePokemon(url) {
        const response = await fetch(url);
        const data = await response.json();
        const typeArray = data['pokemon'];


        const typepromises = typeArray.map(pokemon => {
            return fetch(pokemon.pokemon.url)
            .then(res => res.json());
        });

        const typeData = await Promise.all(typepromises)
        
        setPokemons(typeData);
        setFilterSearch(typeData);
    }

    async function randomPoke(url) {
        const response = await fetch(url);
        const data = await response.json();
        setFilterSearch([data]);
    }


    
    return ( 
        <>
            <div className = "headerLogo">
                <h2 className = "title">Pokebox</h2> 
                <Logo/>
            </div>
            <SelectPoke generations = {generations} fetchGen1Pokemon= {fetchGen1Pokemon} handleInput = {handleInput} fetchFirePokemon={fetchFirePokemon} randomPoke = {randomPoke}></SelectPoke>
            <Pokelist pokemons = {filteredSearch}></Pokelist>
            
        </>
     );
}
 
export default Pokebox;