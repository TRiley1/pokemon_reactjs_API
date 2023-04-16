import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;


const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  background-color: #008cba;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 5px;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: #005f8b;
  }
`;

const StyledItem = styled.div`
  background-color: #eee;
  padding: 1rem;
  text-align: center;
  width: calc((100% / 3) - 1rem);
`;

 
export {StyledContainer,StyledTitle,StyledButton, StyledItem}