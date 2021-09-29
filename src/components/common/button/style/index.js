import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: auto;
  padding: 10px 25px;
  margin: 0;
  text-decoration: none;
  background: transparent;
  color: #000000;
  cursor: pointer;
  text-align: center;
  transition: ease-in-out 150ms ease;
  border: 1px solid;
  border-radius: 10px;


  &:hover,
  &:focus {
    background-color: white;
  }

  &:focus {
    outline: 2px solid;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export default ButtonContainer;
