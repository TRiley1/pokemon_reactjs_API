import React, { useState } from 'react';
import './SelectPoke.css';
import { StyledImage, StyledItem } from './StyledComponents';
import Typeicon from './Typeicon';

const Pokemon = ({ raremon }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const data = Object.entries(raremon);

  const nextButton = () => {
    setImageIndex((prev) => (prev + 1) % data.length);
  };

  const prevButton = () => {
    setImageIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleClick = (event) => {
    const index = event.currentTarget.getAttribute('data-value');
    setImageIndex(index);
  };

  const topRowIcons = () => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      icons.push(
        <Typeicon
          key={i}
          handleClick={handleClick}
          url={i}
          isActive={imageIndex === i}
          background={data[i][1].colour}
        >
          {data[i][1].component}
        </Typeicon>
      );
    }
    return icons;
  };

  const bottomRowIcons = () => {
    const icons = [];
    for (let i = 5; i < data.length; i++) {
      icons.push(
        <Typeicon
          key={i}
          handleClick={handleClick}
          url={i}
          isActive={imageIndex === i}
          background={data[i][1].colour}
        >
          {data[i][1].component}
        </Typeicon>
      );
    }
    return icons;
  };

  

  return (
    <>
      <StyledItem>
        {/* <h1>Raremon</h1> */}
        <div>
            <div className = 'icons'>
                {topRowIcons()}
            </div>
            <div className = "container">
                <button className="carubutton" onClick={prevButton}>&lt;</button>
                <div>
                    {data[imageIndex][1].discovered ? (
                        <div>
                        <StyledImage src={`/raremon/${data[imageIndex][1].image}`} />
                        <h2>Raremon</h2>
                        </div>
                    ) : (
                        <div>
                        <StyledImage src={`/raremon/${data[imageIndex][1].darkImage}`} />
                        <h2>NOT DISCOVERED</h2>
                        </div>
                    )}
                    </div>

                <button className="carubutton" onClick={nextButton}>&gt;</button>
            </div>
            <div className = 'icons'>
                {bottomRowIcons()}
            </div>
        </div>
      </StyledItem>
    </>
  );
};

export default Pokemon;

