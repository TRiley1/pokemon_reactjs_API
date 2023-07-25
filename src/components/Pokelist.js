import '../App.css'
import Pokemon from "./Pokemon";
import { StyledContainer, StyledItem } from './StyledComponents';

const Pokelist = ({raremons}) => {

     console.log(raremons)
     const raremonNodes = Object.keys(raremons).map((raremonName, index) => {
          const raremon = raremons[raremonName];
        
          return raremon ? (
            <Pokemon raremon={raremon} key={index} />
          ) : null;
        });
        


    return ( 
        <>
           <StyledContainer>
                {raremonNodes}
           </StyledContainer>
        </>
     );
}
 
export default Pokelist;