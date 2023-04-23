import React, { useState, useRef } from 'react';
import Typeicon from './Typeicon';
import BugIcon from './TypeComponents/BugIcon';
import WaterIcon from './TypeComponents/WaterIcon';
import FireIcon from './TypeComponents/FireIcon';
import Grass from './TypeComponents/Grass';
import Thunder from './TypeComponents/Thunder';
import Steel from './TypeComponents/Steel';
import DragonIcon from './TypeComponents/DragonIcon';
import RockIcon from './TypeComponents/RockIcon';
import GhostIcon from './TypeComponents/GhostIcon';
import PoisonIcon from './TypeComponents/PoisonIcon';
import GroundIcon from './TypeComponents/GroundIcon';
import FightingIcon from './TypeComponents/FightingIcon';
import FlyingIcon from './TypeComponents/FlyingIcon';
import Normalcon from './TypeComponents/Normalcon';
import IceIcon from './TypeComponents/IceIcon';
import DarkIcon from './TypeComponents/DarkIcon';
import FairyIcon from './TypeComponents/FairyIcon';
import './SelectPoke.css'
import PsychicIcon from './TypeComponents/PsychicIcon';




const SelectPoke = ({generations, fetchGen1Pokemon, handleInput, fetchFirePokemon}) => {

    const [isActive, setIsActive] = useState(null)
    const inputRef = useRef(null);

    const selectOptions = generations.map((generation, index) => {
        return <option value = {generation.url} key = {index}> {generation.name} </option>
    })

    const handleChange = function(event){
        console.log(event.target.value)
        const url = event.target.value;
        fetchGen1Pokemon(url)
        inputRef.current.value = '';
    }

    const handleInputChange = function(event){
        console.log(event.target.value)
        handleInput(event.target.value)
    }

    const random = function(){
        const id = Math.floor(Math.random() * 1100)

        return `https://pokeapi.co/api/v2/pokemon/` + id
    }

    const handleClick = function(event) {
        console.log(event)
        const value = event.currentTarget.getAttribute('data-value');
        // console.log(value);
        fetchFirePokemon(value)
        inputRef.current.value = '';
        setIsActive(value)
    }



    return ( 
        <>
            {/* <select onChange = {handleChange}>
                {selectOptions}
            </select> */}

            <input onChange = {handleInputChange} ref = {inputRef} placeholder = "Search..."></input>

            <button onClick={handleClick} value = {random}>Random Pokemon</button>
            
            <div className = "typeNav">
                
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/10" background = "red" isActive = {"https://pokeapi.co/api/v2/type/10" === isActive}><FireIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/11" background = "blue" isActive = {"https://pokeapi.co/api/v2/type/11" === isActive}><WaterIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/12" background = "green" isActive = {"https://pokeapi.co/api/v2/type/12" === isActive}><Grass/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/13" background = "yellow" isActive = {"https://pokeapi.co/api/v2/type/13" === isActive}><Thunder/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/9" background = "grey" isActive = {"https://pokeapi.co/api/v2/type/9" === isActive}> <Steel></Steel></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/8" background = "purple" isActive = {"https://pokeapi.co/api/v2/type/8" === isActive}><GhostIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/7" background = "green" isActive = {"https://pokeapi.co/api/v2/type/7" === isActive}><BugIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/6" background = "brown" isActive = {"https://pokeapi.co/api/v2/type/6" === isActive}><RockIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/5" background = "brown" isActive = {"https://pokeapi.co/api/v2/type/5" === isActive}><GroundIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/4" background = "purple" isActive = {"https://pokeapi.co/api/v2/type/4" === isActive}><PoisonIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/3" background = "white" isActive = {"https://pokeapi.co/api/v2/type/3" === isActive}><FlyingIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/2" background = "brown" isActive = {"https://pokeapi.co/api/v2/type/2" === isActive}><FightingIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/1" background = "grey" isActive = {"https://pokeapi.co/api/v2/type/1" === isActive}><Normalcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/14" background = "purple" isActive = {"https://pokeapi.co/api/v2/type/14" === isActive}><PsychicIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/15" background = "blue" isActive = {"https://pokeapi.co/api/v2/type/15" === isActive}><IceIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/16" background = "purple" isActive = {"https://pokeapi.co/api/v2/type/16" === isActive}><DragonIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/17" background = "black" isActive = {"https://pokeapi.co/api/v2/type/17" === isActive}><DarkIcon/></Typeicon>
                <Typeicon handleClick={handleClick} url = "https://pokeapi.co/api/v2/type/18" background = "pink" isActive = {"https://pokeapi.co/api/v2/type/18" === isActive}><FairyIcon/></Typeicon>
            </div>


            


    </>
    );
}
 
export default SelectPoke;