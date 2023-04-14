import Pokelist from "../components/Pokelist";
import React, { useState, useEffect } from 'react';


const Pokebox = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetchGen1Pokemon()
    },[])

    

     const fetchGen1Pokemon = function(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151=0')
        .then(res => res.json())
        .then(data => {
            const speciesArray = data['results']
            const pokemonData = []

            speciesArray.forEach((pokemon) => {
                fetch(pokemon.url)
                .then(res => res.json())
                .then(data => pokemonData.push(data))
            })
        setPokemons(pokemonData)
        }) 
    }

    
    

    // pokemonData.forEach((pokemon)=>{
    //     fetch(pokemon.url)
    //     .then(res => res.json())
    //     .then(data => pokemonJson.push({pokemon.name, data}))
    // })

    





    return ( 
        <>
            <h2>Pokebox</h2>
            <Pokelist pokemons = {pokemons}></Pokelist>
        </>
     );
}
 
export default Pokebox;