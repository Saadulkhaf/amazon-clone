export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD TO BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE FROM BASKET":
      return state;

    default:
      return state;
  }
};

export default reducer;
