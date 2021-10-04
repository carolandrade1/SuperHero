import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  a {
    text-align: center;
    width: 200px;
    background-color: #FFFFFF;
    padding: 10px 20px;
    border: 1px solid;
    transition: ease-in-out 250ms;

    &:hover {
      background-color: transparent;
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;

export const Erro = styled.div`
  display: flex;
  justify-content: center;
  
  width: 30%;
  max-height: 50%;

  @media only screen and (max-width: 550px) {
    width: 80%;
  }

  img {
    width: 100%;
  }

`;

export default NotFoundContainer;
