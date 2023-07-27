import React, { useState } from 'react';
import './SelectPoke.css';
import { StyledImage, StyledItem } from './StyledComponents';
import DarkIcon from './TypeComponents/DarkIcon';

const Pokemon = ({ raremon }) => {

    const [imageIndex, setImageIndex] = useState(0);
    console.log(raremon);

    const urls = [
        raremon?.water?.["1"] ?? "",
        raremon?.normal?.["1"] ?? "",
        raremon?.fire?.["1"] ?? "",
        raremon?.steel?.["1"] ?? "",
        raremon?.wind?.["1"] ?? "",
        raremon?.grass?.["1"] ?? "",
        raremon?.dark?.["1"] ?? "",
        raremon?.eletric?.["1"] ?? "",
        raremon?.fairy?.["1"] ?? "",
        raremon?.ghost?.["1"] ?? "",
    ];

    const nextButton = () => {
        setImageIndex((prev) => (prev + 1) % urls.length);
      };
      
      

    const prevButton = () => {
        setImageIndex((prev) => (prev - 1 + urls.length) % urls.length);
      };
      

    return (
        <StyledItem>
            {/* <h1>Raremon</h1> */}
            <button className="prev-button" onClick={prevButton}>&lt;</button>
                       
                        <div className>
                            <StyledImage src={`/raremon/${urls[imageIndex]}`} />
                        </div>
                        
                         <button className="next-button" onClick={nextButton}>&gt;</button>
                         <div>
                         <DarkIcon/>
                         </div>
                   
               
        </StyledItem>
    );
};

export default Pokemon;
