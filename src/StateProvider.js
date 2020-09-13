import React, { createContext, useContext, useReducer } from "react";
// Prepares the data layer
export const StateContext = createContext();
// wrap our app and provide data layer
export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);
// pull information from data layer
export const useStateValue = () => useContext(StateContext);
