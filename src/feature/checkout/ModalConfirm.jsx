import { useContext, useEffect, useState } from "react";
import cartContext from "../../context/CartContext";
import { formatNumberIndian } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

function ModalConfirm() {
  const { cart, dispatch } = useContext(cartContext);
  const navigate = useNavigate();

  const totalItems = cart.cart.reduce((acc, item) => (acc += item.quantity), 0);

  const [rootHeight, setRootHeight] = useState("");

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      setRootHeight(String(rootElement.clientHeight));
    }
  }, []);

  return (
    <section
      className={`absolute top-0 left-0 z-30 bg-black/50  overflow-hidden  w-full  `}
      style={{ height: `${rootHeight}px` }}
    >
      <div className="flex flex-col gap-y-4 items-center justify-center w-11/12 absolute top-[50vh] left-[50vw] -translate-x-2/4 -translate-y-2/4  bg-white p-5 rounded-xl md:mx-0 md:w-fit">
        <img
          src="/checkoutDone.png"
          alt="checkout done logo"
          className="w-20"
        />
        <h1 className="text-2xl font-bold">
          Your checkout for {totalItems} items have been successfully completed.
        </h1>
        <hr className="w-full rounded-2xl border h-1 bg-black/35 lg:w-10/12" />
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
