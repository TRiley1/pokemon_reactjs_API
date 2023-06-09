import React, { useState } from 'react';
import { StyledTitle, StyledButton,StyledItem, StyledImage } from './StyledComponents';
import Pokeball from './logo/Pokeball';
import './SelectPoke.css'

const Pokemon = ({pokemon}) => {

    const [shiny, setShiny] = useState(false)

    const handleClick = function(){
        setShiny(!shiny)
    }



    return ( 
    <>
        <StyledItem>
            <div className = "headerCard">
                <StyledTitle>{shiny? `Shiny ${pokemon.name}`: `${pokemon.name}`}</StyledTitle>
                <Pokeball/>
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