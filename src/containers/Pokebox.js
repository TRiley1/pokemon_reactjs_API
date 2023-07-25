import Pokelist from "../components/Pokelist";
import SelectPoke from "../components/SelectPoke";
import React, { useState, useEffect } from 'react';
import Logo from "../components/logo/Logo";
import '../components/SelectPoke.css';
import getRaremon from "../raremon/raremon";




const Pokebox = () => {

    const [raremons, setRaremons] = useState(getRaremon());

      if (raremons == null || raremons.length === 0) {
        return <p>Loading...</p>;
      }
   
    return ( 
        <>
            <div className = "headerLogo">
                <h2 className = "title">Rarelands</h2> 
                <Logo/>
            </div>
            <Pokelist raremons = {raremons}></Pokelist>
            
        </>
     );
}
 
export default Pokebox;