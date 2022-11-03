import { counterTypes } from "../types/counterTypes";

const initialState = {
  counter: 0,
};

export const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case counterTypes.ADD_OPERATION:
      const incremento = state.counter + action.payload;
      return {
        ...state,
        counter: incremento,
      };
    case counterTypes.MINUS_OPERATION:
      const decremento = state.counter - action.payload;
      return {
        ...state,
        counter: decremento,
      };
    default:
      return state;
  }
};
