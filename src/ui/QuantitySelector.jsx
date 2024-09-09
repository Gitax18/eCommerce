import { useContext } from "react";
import cartContext from "../context/CartContext";

/* eslint-disable react/prop-types */
function QuantitySelector({ item, bgColorClass = "bg-white" }) {
  const { cart, dispatch } = useContext(cartContext);
  const prdt = cart.cart.find((it) => it.id === item.id);
  return (
    <div className="flex gap-x-4 items-center">
      <button
        className={`text-2xl  font-black h-10 w-10  rounded-full flex items-center justify-center cursor-pointer ${bgColorClass}`}
        onClick={() => dispatch({ type: "decrement", payload: item })}
      >
        <span>-</span>
      </button>
      <span className="font-bold text-xl">{prdt.quantity}</span>
      <button
        className={`text-2xl  font-black h-10 w-10 rounded-full flex items-center justify-center cursor-pointer ${bgColorClass}`}
        onClick={() => dispatch({ type: "increment", payload: item })}
      >
        <span>+</span>
      </button>
    </div>
  );
}

export default QuantitySelector;
