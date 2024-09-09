import { useContext } from "react";
import QuantitySelector from "../../ui/QuantitySelector";
import cartContext from "../../context/CartContext";
import { formatNumberIndian } from "../../utils/helper";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { dispatch } = useContext(cartContext);

  return (
    <li className="flex items-start justify-between pr-3 p-2 bg-gray-100 flex-col gap-y-4 lg:flex-row lg:gap-y-0 md:items-center">
      <div className="flex items-center gap-x-4">
        <img src={item.image} alt={item.title} className="h-20 rounded-lg" />
        <div>
          <p className="text-base font-semibold lg:text-xl">
            {item.title.split(" ").slice(0, 3).join(" ")}
          </p>
          <p className="text-md font-black mt-1 lg:text-2xl lg:font-bold">
            ₹ {formatNumberIndian(Number(item.price) * 40)}
            /-
          </p>
        </div>
      </div>
      <div className="flex h-full gap-x-8">
        <QuantitySelector item={item} />
        <button
          className="text-red-700 text-xl font-semibold hover:underline"
          onClick={() => dispatch({ type: "removeFromCart", payload: item })}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
