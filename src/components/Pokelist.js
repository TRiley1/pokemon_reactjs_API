import '../App.css'
import Pokemon from "./Pokemon";
import { StyledContainer, StyledItem } from './StyledComponents';

const Pokelist = ({pokemons}) => {


    const pokemonNodes = pokemons.map((pokemon) => {
         return (pokemon)? <Pokemon pokemon={pokemon} key = {pokemon.id}></Pokemon> : null
    })


    return ( 
        <>
           <StyledContainer>
                {pokemonNodes}
           </StyledContainer>
        </>
     );
}
 
export default Pokelist;