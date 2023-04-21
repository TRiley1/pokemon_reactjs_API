import React, { useState, useRef } from 'react';



const SelectPoke = ({generations, fetchGen1Pokemon, handleInput}) => {

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

    return ( 
        <>
            <select onChange = {handleChange}>
                {selectOptions}
            </select>
            <input onChange = {handleInputChange} ref = {inputRef} >

            </input>
        </>
    );
}
 
export default SelectPoke;