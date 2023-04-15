const Pokemon = ({pokemon, shiny, handleClick}) => {

    



    return ( 
    <>
        <h3>{pokemon.name}</h3>
        <img src = {shiny? pokemon.sprites.front_shiny : pokemon.sprites.front_default } alt = {pokemon.name}/>
        <button onClick = {handleClick} value = {pokemon.sprites.shiny_default}></button>
        
    </>
    );
}
 
export default Pokemon;