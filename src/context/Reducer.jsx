import { actionTypes } from "./Actions";
export const initialState = {
  transactions: [],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DEL_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
