import TrainingList from "./TrainingList";
import Rules from "./Rules";

const Training = () => {
    return ( 
        <>
            <img src = "/training.jpeg" style = {{height: "600px", width:"1200px"}}/>
            <div style = {{display:"flex", justifyContent: "space-between"}}>
                <TrainingList/>
                <Rules/>
            </div>
        </>
     );
}
 
export default Training;