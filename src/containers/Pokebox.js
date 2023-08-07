import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

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





const Pokebox = () => {

    const [raremons, setRaremons] = useState(getRaremon());


      if (raremons == null || raremons.length === 0) {
        return <p>Loading...</p>;
      }

      return (
        <Router>
          <div className="home-screen">
            <header>
              <div className="logo">
                <img src="raremon/MIsc/grass.png" alt="Logo" />
              </div>
              <nav>
                <ul className="nav-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/collection">Collection</Link></li>
                  <li><Link to="/training">Training</Link></li>
                  <li><Link to="/store">Store</Link></li>
                </ul>
              </nav>
              <div className="social-icons">
                <div><TwitterIcon /></div>
                <div><DiscordIcon /></div>
              </div>
            </header>
    
            <main className="content">
              <div className="central-component">
                <Routes>
                  <Route path="/" element={<SplashScreen />} />
                  <Route path="/collection" element={<Pokelist raremons={raremons} />} />
                </Routes>
              </div>
            </main>
          </div>
        </Router>
      );
    }

 
export default Pokebox;