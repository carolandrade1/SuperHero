import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;

  a {
    padding: 5px 20px;
    border: 1px solid;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

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
  height: 65vh;
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
      width: 178px;
      height: 334px;
      padding: 8px;
      margin: 10px auto;
      border: 1px solid #000000;
      background-color: #FFFFFF;
      transition: ease-in-out 0.2s;

      &:hover {
        transform: scale(1.03);
        border: 2px solid;
      }
    }

    img {
      width: 100%;
      max-height: 240px;
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      height: 76px;
      padding: 4px;
    }

    h2 {
      font-size: 18px;
      text-align: center;
    }

    button {
      cursor: pointer;
      padding: 2px 10px;
      border-radius: 4px;
      text-align: center;
      font-weight: 700;
      background-color: transparent;
      width: 50px;

      &:hover {
        background-color: #000000;
        color: #FFFFFF;
      }
    }
`;

export default Header;
