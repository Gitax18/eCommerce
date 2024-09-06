import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-blue-100 h-20 flex items-center justify-between p-8">
      <Logo />
      <ul className="flex items-center justify-center gap-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
