import styled from 'styled-components'


const Typeicon = ({handleClick, children, url, background, isActive}) => {

    
    return ( 
        <>
        {!isActive? (<StyledButton onClick = {handleClick} data-value = {url} background = {background}>
            {children}
        </StyledButton>) : <ActiveButton onClick = {handleClick} data-value = {url} background = {background}>
            {children}
        </ActiveButton>}
        </>
     );
}


const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: grey;
  width: 2.5em;
  height: 2.5em;
  border-radius: 100px;
  margin: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${({ background }) => background};
  }
`;

const ActiveButton = styled(StyledButton)`
  background-color: ${({ background }) => background};
`;

export default Typeicon;