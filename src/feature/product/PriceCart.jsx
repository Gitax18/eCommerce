/* eslint-disable react/prop-types */
import { useContext } from "react";
import { formatNumberIndian } from "../../utils/helper";
import cartContext from "../../context/CartContext";
import QuantitySelector from "../../ui/QuantitySelector";

function PriceCart({ data }) {
  const { cart, dispatch } = useContext(cartContext);
  const exists = cart.cart.some((item) => item.id === data.product.id);
  const isLogin = JSON.parse(localStorage.getItem("userdata"));

  return (
    <>
      <div className="my-10 px-8 flex  w-full items-center justify-between mx-auto md:w-[50%]">
        <p className="text-2xl font-black">
          ₹ {formatNumberIndian(Number(data.product.price) * 40)}/-
        </p>

        {exists ? (
          <QuantitySelector item={data.product} bgColorClass="bg-blue-200" />
        ) : (
          <button
            className="border-blue-600 border-2 p-2 bg-blue-200"
            onClick={() => {
              if (isLogin)
                dispatch({ type: "addToCart", payload: data.product });
              else alert("please login to purchase product");
            }}
          >
            add to cart
          </button>
        )}
      </div>
    </>
  );
}

export default PriceCart;
