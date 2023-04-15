import Pokelist from "../components/Pokelist";
import SelectPoke from "../components/SelectPoke";
import React, { useState, useEffect } from 'react';


const Pokebox = ({generations}) => {

    const [pokemons, setPokemons] = useState([])
    const [shiny, setShiny] = useState(false)

    const handleClick = function(){
        setShiny(!shiny)
    }


    useEffect(() => {
        fetchGen1Pokemon(generations[0].url);
      }, []);

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
    }



    //  const fetchGen1Pokemon = function(){
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=15=0')
    //     .then(res => res.json())
    //     .then(data => {
    //         const speciesArray = data['results']
    //         const pokemonData = []

    //         speciesArray.forEach((pokemon) => {
    //             fetch(pokemon.url)
    //             .then(res => res.json())
    //             .then(data => pokemonData.push(data))
    //         })
    //     setPokemons(pokemonData)
    //     }) 
    // }
    
    return ( 
        <>
            <h2>Pokebox</h2>
            <SelectPoke generations = {generations} fetchGen1Pokemon= {fetchGen1Pokemon}></SelectPoke>
            <Pokelist pokemons = {pokemons} shiny = {shiny} handleClick = {handleClick}></Pokelist>
            
        </>
     );
}
 
export default Pokebox;