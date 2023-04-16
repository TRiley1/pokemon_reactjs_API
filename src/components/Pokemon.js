import React, { useState } from 'react';
import { StyledTitle, StyledButton,StyledItem, StyledImage } from './StyledComponents';

const Pokemon = ({pokemon}) => {

    const [shiny, setShiny] = useState(false)

    const handleClick = function(){
        setShiny(!shiny)
    }



    return ( 
    <>
        <StyledItem>
            <div>
                <StyledTitle>{shiny? `Shiny ${pokemon.name}`: pokemon.name}</StyledTitle>
            </div>
            <div>
            <StyledImage src = {shiny? pokemon.sprites.other['official-artwork'].front_shiny: pokemon.sprites.other['official-artwork'].front_default } alt = {pokemon.name}/>
            </div>
            <div>
                <StyledButton onClick = {handleClick}>Toggle Shiny</StyledButton> 
            </div>
        </StyledItem>
    </>
    );
}
 
export default Pokemon;