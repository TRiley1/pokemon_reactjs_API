import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns:(1, 1fr);
  gap: 1rem;
  margin: 10px;

  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    ${'' /* margin: 10px; */}
    ${'' /* margin-top: 5px; */}
      }

  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin: 10px;
    margin-top: 5px;
      }
`;

const StyledTitle = styled.h1`
  font-size: 2.2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  text-transform: capitalize;
  margin-right: 15px;
`;

const StyledButton = styled.button`
  background-color: #008cba;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  margin-top: 15px

  &:hover {
    background-color: #005f8b;
  }
`;

const StyledItem = styled.div`
  background-color: #eee;
  padding: 1rem;
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center;
  border-radius: 100px;
  overflow: hidden;
`;


const StyledImage = styled.img`
  width: 350px;
  height: 350px;
  margin: 10px;
`

 
export {StyledContainer,StyledTitle,StyledButton, StyledItem, StyledImage}