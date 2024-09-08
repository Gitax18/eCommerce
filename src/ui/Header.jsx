import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const localstoragedata = JSON.parse(localStorage.getItem("userdata"));

  return (
    <header className="bg-blue-100 h-[10vh] flex items-center justify-between p-2 md:p-10">
      <Logo />
      <ul className="flex items-center justify-center gap-3">
        <li className="text-xl font-semibold">
          <NavLink to="/">Home</NavLink>
        </li>
        {localstoragedata?.isLogin && (
          <li className="text-xl font-semibold">
            <NavLink to="/cart">Cart</NavLink>
          </li>
        )}
        {!localstoragedata && (
          <li className="text-xl font-semibold">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
