import { useContext } from "react";
import { formatNumberIndian } from "../../utils/helper";
import cartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartTotal() {
  const { cart, dispatch } = useContext(cartContext);
  const navigate = useNavigate();
  const total = cart.cart.reduce(
    (acc, item) => acc + Number(item.price * 40) * Number(item.quantity),
    0
  );
  return (
    <div className="border-2 flex items-center justify-between border-black rounded-lg p-4 w-10/12 mx-auto lg:w-6/12">
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-semibold">Total Amount:</h2>
        <p className="text-xl font-black lg:text-2xl">
          {" "}
          ₹ {formatNumberIndian(total)} /-
        </p>
      </div>
      <button
        className="border-2 px-4 py-3 rounded-xl text-base font-semibold bg-blue-800 text-white cursor-pointer lg:text-xl lg:px-6 lg:py-4"
        onClick={() => {
          dispatch({ type: "total", payload: total });
          navigate("checkout");
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartTotal;
