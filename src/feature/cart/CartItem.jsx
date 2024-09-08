import { useContext } from "react";
import QuantitySelector from "../../ui/QuantitySelector";
import cartContext from "../../context/CartContext";
import { formatNumberIndian } from "../../utils/helper";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { dispatch } = useContext(cartContext);

  return (
    <li className="flex items-center justify-between pr-3 bg-gray-100">
      <div className="flex items-center  gap-x-4">
        <img src={item.image} alt={item.title} className="h-20 rounded-lg" />
        <div>
          <p className="text-xl font-semibold">
            {item.title.split(" ").slice(0, 3).join(" ")}
          </p>
          <p className="text-xl font-semibold">
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
