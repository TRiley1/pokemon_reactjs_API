const Pokemon = ({pokemon}) => {
    return ( 
    <>
        <h3>{pokemon.name}</h3>
        <img src = {pokemon.sprites.front_shiny} alt = {pokemon.name}/>
        <img src = {pokemon.sprites.versions['generation-i'].yellow.front_default} alt = {pokemon.name}/>
        <img src = {pokemon.sprites.versions['generation-ii'].crystal.front_default} alt = {pokemon.name}/>
        <img src = {pokemon.sprites.versions['generation-iii'].emerald.front_default} alt = {pokemon.name}/>
        <img src = {pokemon.sprites.versions['generation-iv']['diamond-pearl'].front_default} alt = {pokemon.name}/>
        <img src = {pokemon.sprites.versions['generation-v']['black-white'].front_default} alt = {pokemon.name}/>
        <img src = {pokemon.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default} alt = {pokemon.name}/>
        <img src = {pokemon.sprites.versions['generation-viii']['icons'].front_default} alt = {pokemon.name}/>
        
    </>
    );
}
 
export default Pokemon;