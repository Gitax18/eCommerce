import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/CartContext";
import CheckoutItem from "../feature/checkout/CheckoutItem";
import CheckoutForm from "../feature/form/CheckoutForm";

function Checkout() {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const { cart } = useContext(cartContext);

  if (userdata == null || cart.cart.length === 0) {
    return (
      <div className="flex flex-col pt-10 min-h-[85vh] max-h-max">
        <h1 className="text-center font-bold text-3xl">Cart Checkout</h1>
        {cart.cart.length === 0 && (
          <h2 className="text-2xl font-semibold text-center mt-16">
            Please visit{" "}
            <Link to="/cart" className="text-blue-600">
              cart
            </Link>{" "}
            page to checkout items
          </h2>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-10 max-h-max min-h-[85vh]">
      <h1 className="text-center font-bold text-3xl">Checkout</h1>
      <div className=" flex flex-col py-10 items-center justify-start xl:items-start xl:flex-row">
        <CheckoutForm />
        <div className="my-10 mx-auto w-11/12 lg:w-6/12 lg:max-h-[50vh] xl:w-4/12 xl:my-0">
          <h2 className="text-xl font-semibold lg:text-2xl">Items</h2>
          <ul className="border-2 border-gray-500 rounded-lg  p-2 divide-y-4 overflow-auto  max-h-[100vh] divide-white">
            {cart.cart.map((item, ind) => (
              <CheckoutItem key={ind} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
