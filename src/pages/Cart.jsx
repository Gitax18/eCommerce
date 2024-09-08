import { useContext } from "react";
import cartContext from "../context/CartContext";
import CartItem from "../feature/cart/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const isLogin = JSON.parse(localStorage.getItem("userdata"));
  const { cart } = useContext(cartContext);

  if (isLogin == null) {
    return (
      <div className="h-[90vh]">
        <h2 className="text-2xl font-semibold text-center mt-16">
          Please Login to view cart
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-10 h-[85vh] max-h-max">
      <h1 className="text-center font-bold text-3xl">Cart</h1>
      {cart.cart.length === 0 && (
        <h2 className="text-2xl font-semibold text-center mt-16">
          No items in cart, visit{" "}
          <Link to="/" className="text-blue-600">
            Home
          </Link>{" "}
          page to choose items
        </h2>
      )}
      {cart.cart.length > 0 && (
        <ul className="border-2 border-gray-500 rounded-lg w-10/12 p-2 divide-y-4 divide-white m-auto my-10 lg:w-6/12">
          {cart.cart.map((item, ind) => (
            <CartItem key={ind} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
