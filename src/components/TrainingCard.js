const TrainingCard = () => {
    return ( 
        <div class = "training-card" style = {{width:"400px", height:"150px", display:"flex", backgroundColor:"silver",borderRadius: "20px"}}>
            <div class = "training-image">
                <h3>img</h3>
            </div>
            <div>
                <div class = "training-stats">
                    <h3>name</h3>
                    <h3>level</h3>
                    <h3>health bar</h3>
                </div>
                <div>
                    <button class = "remove-button">Remove</button>
                    <button class = "transfer-button">Transfer</button>
                </div>
            </div>
        </div>
     );
}
 
export default TrainingCard;