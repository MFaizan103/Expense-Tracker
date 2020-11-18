import React, { createContext, useReducer } from "react";
import { appReducer, initialState } from "./Reducer";

// Action Types
export const actionTypes = {
  DEL_TRANSACTION: "DEL_TRANSACTION",
  ADD_TRANSACTION: "ADD_TRANSACTION",
};

// Createing Data Layer
export const GlobalContext = createContext();

// Wrapping Data Layer around App
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  // Actions
  const deleteTransaction = (id) => {
    dispatch({ type: actionTypes.DEL_TRANSACTION, payload: id });
  };
  const addTransaction = (trn) => {
    dispatch({ type: actionTypes.ADD_TRANSACTION, payload: trn });
  };

  return (
    <GlobalContext.Provider
      value={{
        addTransaction,
        deleteTransaction,
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook for Pulling State and Dispatch Action
