import Pokelist from "../components/Pokelist";
import SelectPoke from "../components/SelectPoke";
import React, { useState, useEffect } from 'react';
import Logo from "../components/logo/Logo";
import '../components/SelectPoke.css';
import getRaremon from "../raremon/raremon";
import SplashScreen from "../components/SplashScreen";
import '../components/SelectPoke.css'
import TwitterIcon from "../components/TypeComponents/TwitterIcon";
import DiscordIcon from "../components/TypeComponents/DiscordIcon";
import FantasyMap from "../components/TypeComponents/FantasyMap";
import FantasyMapDetail from "../components/TypeComponents/FantasyMapDetail";
import FantasyMapCombine from "../components/FantasyMapCombine";




const Pokebox = () => {

    const [raremons, setRaremons] = useState(getRaremon());


      if (raremons == null || raremons.length === 0) {
        return <p>Loading...</p>;
      }

        return (
          <div className="home-screen">
            <header>
              <div className="logo">
                <img src="raremon/MIsc/grass.png" alt="Logo" />
              </div>
              <nav>
                <ul className="nav-links">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Collection</a></li>
                  <li><a href="#">Training</a></li>
                  <li><a href="#">Store</a></li>
                </ul>
              </nav>
              <div className="social-icons">
                <div> <TwitterIcon/></div>
                <div><DiscordIcon/></div>
              </div>
            </header>
      
            <main className="content">
              <div className="central-component">
                {/* <SplashScreen/>
                <h3>Coming soon...</h3> */}
                <Pokelist raremons={raremons}/>
              </div>
              {/* <div className="map-container">
                <div className="map-overlay">
                    <FantasyMapDetail />
                </div>
                <FantasyMap />
              </div> */}
            </main>
          </div>
        );
}
 
export default Pokebox;