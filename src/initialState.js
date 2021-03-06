export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD TO BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE FROM BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product (id : ${action.id} as its not here`);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
