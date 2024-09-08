/* eslint-disable react/prop-types */
import { useReducer } from "react";
import cartContext from "../../context/CartContext";

function CartContextProvider({ children }) {
  const initialState = {
    cart: [],
    total: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "addToCart": {
        const exists = state.cart.some((item) => item.id === action.payload.id);
        if (!exists) {
          return { ...state, cart: [...state.cart, action.payload] };
        }
        return state;
      }
      case "removeFromCart": {
        const newState = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, cart: newState };
      }
      case "increment": {
        const newState = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: newState };
      }
      case "decrement": {
        const newState = state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  item.quantity === 1 ? item.quantity : item.quantity - 1,
              }
            : item
        );
        return { ...state, cart: newState };
      }
      default:
        return state;
    }
  }

  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
