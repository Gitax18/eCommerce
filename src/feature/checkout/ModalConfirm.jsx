import { useContext } from "react";
import cartContext from "../../context/CartContext";
import { formatNumberIndian } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

function ModalConfirm() {
  const { cart, dispatch } = useContext(cartContext);
  const navigate = useNavigate();

  const totalItems = cart.cart.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <section
      className="absolute top-0 left-0 z-30 bg-black/50 overflow-hidden  h-[109vh] w-full flex items-center justify-center"
      style={{ overflow: "hidden" }}
    >
      <div className="flex flex-col gap-y-4 items-center justify-center bg-white p-5 rounded-xl">
        <img
          src="/checkoutDone.png"
          alt="checkout done logo"
          className="w-20"
        />
        <h1 className="text-2xl font-bold">
          Your checkout for {totalItems} items have been successfully completed.
        </h1>
        <hr className="w-10/12 h-1 bg-black/35" />
        <h2 className="text-2xl font-bold">
          Payment Made of ₹ {formatNumberIndian(cart.total)}
          /-
        </h2>
        <button
          className="text-xl font-semibold bg-blue-600 text-white px-6 py-3 cursor-pointer rounded-xl"
          onClick={() => {
            dispatch({ type: "emptyCart" });
            navigate("/");
          }}
        >
          Shop More
        </button>
      </div>
    </section>
  );
}

export default ModalConfirm;
