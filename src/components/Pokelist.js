import Pokemon from "./Pokemon";

const Pokelist = ({pokemons, shiny, handleClick}) => {


    const pokemonNodes = pokemons.map((pokemon) => {
         return (pokemon)? <Pokemon pokemon={pokemon} key = {pokemon.id} shiny = {shiny} handleClick = {handleClick}></Pokemon> : null
    })



    

    return ( 
        <>
            <h3>Pokelist</h3>
            {pokemonNodes}
        </>
     );
}
 
export default Pokelist;