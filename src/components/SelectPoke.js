
const SelectPoke = ({generations, fetchGen1Pokemon}) => {

    const selectOptions = generations.map(generation => {
        return <option value = {generation.url}> {generation.name}</option>
    })

    const handleChange = function(event){
        console.log(event.target.value)
        const url = event.target.value;
        fetchGen1Pokemon(url)
    }


    return ( 
        <>
            <select onChange = {handleChange}>
                {selectOptions}
            </select>
        </>
    );
}
 
export default SelectPoke;