const Pokemon = ({pokemon}) => {
    return ( 
    <>
        <h3>{pokemon.name}</h3>
        <img src = {pokemon.sprites.front_shiny} />
    </>
    );
}
 
export default Pokemon;