import '../App.css'
import Pokemon from "./Pokemon";

const Pokelist = ({pokemons}) => {


    const pokemonNodes = pokemons.map((pokemon) => {
         return (pokemon)? <Pokemon pokemon={pokemon} key = {pokemon.id}></Pokemon> : null
    })



    

    return ( 
        <>
            
            <div className = 'pokemon_grid'>
                {pokemonNodes}
            </div>
        </>
     );
}
 
export default Pokelist;