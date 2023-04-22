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
        console.log(event.target.value)
        const value = event.currentTarget.getAttribute('data-value');
        console.log(value);
        fetchFirePokemon(value)
        inputRef.current.value = '';
    }



    return ( 
        <>
            <select onChange = {handleChange}>
                {selectOptions}
            </select>

            <input onChange = {handleInputChange} ref = {inputRef} placeholder = "Search..."></input>

            <button onClick={handleClick} value = {random}>Random Pokemon</button>
            
            <div className = "typeNav">
                
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/10" background = "red"><FireIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/11" background = "blue"><WaterIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/12" background = "green"><Grass/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/13" background = "yellow"><Thunder/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/9" background = "grey"> <Steel></Steel></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/8" background = "purple"><GhostIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/7" backgrund = "green"><BugIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/6" background = "brown"><RockIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/5" background = "brown"><GroundIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/4" background = "purple"><PoisonIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/3" background = "white"><FlyingIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/2" background = "brown"><FightingIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/1" background = "grey"><Normalcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/14" background = "purple"><PsychicIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/15" background = "blue"><IceIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/16" background = "purple"><DragonIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/17" background = "grey"><DarkIcon/></Typeicon>
                <Typeicon onClick={handleClick} url = "https://pokeapi.co/api/v2/type/18" background = "pink"><FairyIcon/></Typeicon>
            </div>


            


    </>
    );
}
 
export default SelectPoke;