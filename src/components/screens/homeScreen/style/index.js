import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  padding-top: 16px;

  div {
    position: relative;
    padding: 0 10px;
  }

  input {
    padding: 5px 40px;
    width: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 10px;
    width: 10%;
  }
`;

export const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 15px;
  height: 71vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

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

    li {
      width: 140px;
      height: 240px;
      padding: 8px;
      margin: 10px auto;
      border: 1px solid #000000;
      background-color: #FFFFFF;
      transition: ease-in-out 0.25s;

      &:hover {
        transform: scale(1.05);
      }
    }

    img {
      width: 100%;
      max-height: 165px;
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 4px;
    }

    span {
      font-weight: 500;
      margin-bottom: 2px;
      font-size: 14px;
    }

`;

export default Form;
