import React, { useState } from 'react';


const Pokemon = ({pokemon}) => {

    const [shiny, setShiny] = useState(false)

    const handleClick = function(){
        setShiny(!shiny)
    }



    return ( 
    <>
        <h3>{pokemon.name}</h3>
        <img src = {shiny? pokemon.sprites.front_shiny : pokemon.sprites.front_default } alt = {pokemon.name}/>
        <button onClick = {handleClick}></button>
        
    </>
    );
}
 
export default Pokemon;