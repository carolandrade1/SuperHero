import styled from 'styled-components';

const SuperHeroContainer = styled.section`
  display: grid;
  place-items: center;
  height: 80vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  @media only screen and (max-width: 550px) {
    &:hover {
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #000000;
      }
      &::-webkit-scrollbar-thumb:active {
        background: #000000;
      }
      &::-webkit-scrollbar-button {
        width: 12px;
        height: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background: #000000;
        border: 17px none #000000;
        border-radius: 50px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
        border: 16px none #ffffff;
        border-radius: 50px;
      }
      &::-webkit-scrollbar-corner {
        background: transparent;
      }
    }
  }
`;

export const SuperHeroCard = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 650px;
  height: auto; 
  margin: 15px 25px;
  padding: 10px;
  border: 1px solid;
  background-color: #FFFFFF;

    @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
  order: 2;
  width: 48%;

  div {
    padding: 7px;
  }

  p {
    font-size: 14px;
    margin-bottom: 2px;
  }

  span {
    font-size: 18px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  order: 1;
  width: 50%;
  height: auto;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }

  img {
    width: 100%;

    @media only screen and (max-width: 700px) {
      height: auto;
    }
  }
`;

export default SuperHeroContainer;
