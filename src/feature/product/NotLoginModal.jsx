import { useNavigate } from "react-router-dom";

function NotLoginModal() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-2 flex flex-col items-center justify-center gap-4 right-2 bg-blue-700 text-white w-11/12 lg:w-3/12 p-2 rounded-lg">
      <p className="text-xl  font-bold">Please Login to add product to cart</p>
      <button
        className="px-6 py-2 border lg:text-xl"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}

export default NotLoginModal;
