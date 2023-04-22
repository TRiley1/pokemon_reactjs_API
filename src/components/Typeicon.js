import styled from 'styled-components'


const Typeicon = ({onClick, children, url, background}) => {
    
    return ( 
        
        <StyledButton onClick = {onClick} data-value = {url} background = {background}>
            {children}
        </StyledButton>
        
     );
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background-color: grey;
    width:2.5em;
    height:2.5em;
    border-radius: 100px;
    margin: 2px;
    cursor: pointer;

    &:hover {
        background-color: ${({background}) => background}
    }
`


export default Typeicon;