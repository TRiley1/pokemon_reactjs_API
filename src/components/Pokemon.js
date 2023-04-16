import React, { useState } from 'react';
import { StyledTitle, StyledButton,StyledItem } from './StyledComponents';

const Pokemon = ({pokemon}) => {

    const [shiny, setShiny] = useState(false)

    const handleClick = function(){
        setShiny(!shiny)
    }



    return ( 
    <>
        <StyledItem>
            <StyledTitle>{pokemon.name}</StyledTitle>
            <img src = {shiny? pokemon.sprites.other['official-artwork'].front_shiny: pokemon.sprites.other['official-artwork'].front_default } alt = {pokemon.name}/>
            <StyledButton onClick = {handleClick}>Toggle Shiny</StyledButton> 
        </StyledItem>
    </>
    );
}
 
export default Pokemon;