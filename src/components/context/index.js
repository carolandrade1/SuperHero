/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  favorites: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addHero = (data) => {
    dispatch({ type: 'ADD_HERO_TO_LIST', payload: data });
  };
  // const deleteHero = (data) => {
  //   dispatch({ type: 'DELETE_HERO_FROM_LIST', payload: data });
  // };

  return (
    <GlobalContext.Provider value={{ favorites: state.favorites, addHero }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
