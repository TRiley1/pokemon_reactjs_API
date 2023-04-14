import Pokemon from "./Pokemon";

const Pokelist = ({pokemons}) => {


    const pokemonNodes = pokemons.map((pokemon) => {
        return <Pokemon pokemon={pokemon} key = {pokemon.id}></Pokemon>
    })



    

    return ( 
        <>
            <h3>Pokelist</h3>
            {pokemonNodes}
        </>
     );
}
 
export default Pokelist;