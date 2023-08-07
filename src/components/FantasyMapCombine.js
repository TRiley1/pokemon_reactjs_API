import FantasyMap from "./TypeComponents/FantasyMap";
import FantasyMapDetail from "./TypeComponents/FantasyMapDetail";
import '../components/SelectPoke.css'


const FantasyMapCombine = () => {
    return ( 
        <div className="overlay-container">
                    <FantasyMap />
                    <FantasyMapDetail />
                </div>
     );
}
 
export default FantasyMapCombine;