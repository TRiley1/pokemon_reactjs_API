import TrainingCard from "./TrainingCard";

import { StyledButton } from "./StyledComponents";
const TrainingList = () => {

    return ( 
        <>
            <div style= {{backgroundColor:"beige", height: "600px", width: "500px", margin: "10px"}}>
                <TrainingCard/>
                <StyledButton>Add</StyledButton>
            </div>
        </>
     );
}
 
export default TrainingList;