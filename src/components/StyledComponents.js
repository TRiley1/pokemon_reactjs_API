import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns:(1, 1fr);
  gap: 10rem;
  margin: 20px;

  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 10px;
    margin-top: 5px;
      }

  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
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
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  margin-top: 15px

  &:hover {
    background-color: #005f8b;
  }
`;

const StyledItem = styled.div`
  background-color: #eee;
  padding: 1rem;
  text-align: center;
  border-radius: 100px
`;

const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  margin: 20px;
`

 
export {StyledContainer,StyledTitle,StyledButton, StyledItem, StyledImage}