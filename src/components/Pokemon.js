import React, { useState } from 'react';
import '../App.css'


const Pokemon = ({pokemon}) => {

    const [shiny, setShiny] = useState(false)

    const handleClick = function(){
        setShiny(!shiny)
    }



    return ( 
    <>
        <h3>{pokemon.name}</h3>
        <img src = {shiny? pokemon.sprites.other['official-artwork'].front_shiny: pokemon.sprites.other['official-artwork'].front_default } alt = {pokemon.name}/>
        <button onClick = {handleClick}>Toggle Shiny</button>
        
    </>
    );
}
 
export default Pokemon;